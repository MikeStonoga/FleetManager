import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, QueryList, signal, ViewChildren, ViewContainerRef } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VolvoColors } from '@commons/colors';
import { ConfirmationDialog } from '@commons/dialogs/confirmation-dialog/confirmation-dialog';
import { AddIcon, RefreshIcon } from '@commons/icons/icons';
import { EntityView } from '@commons/models/entity.models';
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkButtonConfiguration, SdkButton, SdkButtonConfiguration } from '@sdk/button/sdk-button';
import { SdkIcon, SdkIconConfiguration } from '@sdk/icon/sdk-icon';
import { ISdkToolbarConfiguration, SdkToolbar } from '@sdk/toolbar/sdk-toolbar';
import { GoHomeButtonConfiguration } from 'app/pages/restricted-area/main-toolbar/buttons/go-home.button-configuration';
import { startWith, Subscription, switchMap } from 'rxjs';
import { ENTITY_CONFIGURATION } from '../entities.configuration';
import { RegisterEntityButton } from './buttons/register-entity-button';
import { EditEntityDialog } from './dialogs/edit/edit-entity-dialog';

@Component({
  selector: 'app-entities-list',
  imports: [
    CommonModule, 
    MatCardModule, 
    SdkButton,
    SdkIcon, 
    SdkToolbar
  ],
  templateUrl: './entities-list.html',
  styleUrl: './entities-list.scss',
  providers: [
    GoHomeButtonConfiguration,
    RefreshIcon,
    AddIcon,
    RegisterEntityButton
  ]
})
export class EntitiesList implements OnDestroy {
  private readonly configuration = inject(ENTITY_CONFIGURATION);

  public get cardTemplate() {
    return this.configuration.list.cards.contentTemplate;
  }
  private readonly destroyRef = inject(DestroyRef);
  
  @ViewChildren('EntityContentTemplate', { read: ViewContainerRef })
  private containers!: QueryList<ViewContainerRef>;

  private get service() { return this.configuration.service; };
  public get entityIcon() { return this.configuration.icon; }
  
  private readonly translationService = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly matDialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  
  public readonly registerButton = inject(RegisterEntityButton);

  private readonly refreshIcon = inject(RefreshIcon);
  private readonly refreshTrigger = signal(0);
  private readonly refresh$ = toObservable(this.refreshTrigger);
  
  public readonly entities = toSignal(
    this.refresh$.pipe(
      startWith(0), // executa uma vez no início
      switchMap(() => this.service.getAll())
    ),
    { initialValue: [] }
  );

  private readonly goHomeButton = inject(GoHomeButtonConfiguration);

  private readonly refreshButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.refresh,
    icon: this.refreshIcon,
    onClick: () => {
      this.refreshTrigger.update(v => v + 1); // Dispara o reload
    }
  });

  public toolbarConfiguration: ISdkToolbarConfiguration = {
    label: this.configuration.namePlural,
    icon: this.entityIcon,
    backgroundColor: VolvoColors.GreyOne,
    endButtons: [
      this.refreshButton,
      this.registerButton,
      this.goHomeButton,
    ]
  };

  private refreshSubscription: Subscription;
  
  public get vehiclesCountLabel() {
    return this.translationService.translation.commons.vehiclesCount;
  }

  constructor() {
    this.refreshSubscription = this.service.listRefreshRequested.subscribe(() => {
      this.refreshButton.onClick();
    });

    this.entityIcon.changeColor(VolvoColors.Black);
    this.goHomeButton.icon.changeColor(VolvoColors.Black);

  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Aguarda os containers do template estarem disponíveis
    this.containers.changes.subscribe(() => this.createDynamicCards());
    this.createDynamicCards();
  }

  private createDynamicCards(): void {
    const templateType = this.configuration.list.cards.contentTemplate;
    const items = this.entities();

    // Garante mesma contagem (1 container por entidade)
    this.containers.forEach((container, index) => {
      container.clear();
      const ref = container.createComponent(templateType);
      (ref.instance as any).entity = items[index];
    });
  }

  editButtonConfig(entity: EntityView) {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.edit,
      icon: new SdkIconConfiguration({ name: 'edit', color: VolvoColors.Black }),
      onClick: () => this.openEditModal(entity),
    });
  }

  removeButtonConfig(entity: EntityView): ISdkButtonConfiguration {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.remove,
      icon: new SdkIconConfiguration({ name: 'delete', color: VolvoColors.Black }),
      onClick: () => {
        this.matDialog.open(ConfirmationDialog, { data: this.translationService.translation.commons.remove + ' ' + this.configuration.nameSingular })
          .afterClosed()
          .subscribe(result => {
            if (!result)
              return;

            this.service.remove(entity.id)
              .subscribe(response => {
                if (!response)
                  return;

                this.service.listRefreshRequested.next();
                this.snackBar.open(this.translationService.translation.commons.removed, 'Ok', { duration: 3000 } );
              })
          })
      },
    });
  }

  detailsButtonConfig(entity: EntityView) {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.goToDetails,
      icon: new SdkIconConfiguration({ name: 'open_in_new', color: VolvoColors.Black }),
      onClick: () => {
        this.service.currentSelected = entity;
        this.router.navigate([`/restricted-area/${this.configuration.entityRoute}/details/${entity.id}`])
      },
    });
  }

  openEditModal(entity: EntityView) {
    this.matDialog.open(EditEntityDialog, {
      data: {
        entity,
        configuration: this.configuration
      }
    })
  }
}
