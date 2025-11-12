import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  QueryList,
  signal,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
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
import {
  ISdkButtonConfiguration,
  SdkButton,
  SdkButtonConfiguration,
} from '@sdk/button/sdk-button';
import { SdkFilter } from '@sdk/filter/sdk-filter';
import { SdkIcon, SdkIconConfiguration } from '@sdk/icon/sdk-icon';
import {
  ISdkToolbarConfiguration,
  SdkToolbar,
} from '@sdk/toolbar/sdk-toolbar';
import { GoHomeButtonConfiguration } from 'app/pages/restricted-area/main-toolbar/buttons/go-home.button-configuration';
import { combineLatest, startWith, Subscription, switchMap } from 'rxjs';
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
    SdkToolbar,
    SdkFilter,
  ],
  templateUrl: './entities-list.html',
  styleUrl: './entities-list.scss',
  providers: [
    GoHomeButtonConfiguration,
    RefreshIcon,
    AddIcon,
    RegisterEntityButton,
  ],
})
export class EntitiesList implements AfterViewInit, OnDestroy {
  private readonly configuration = inject(ENTITY_CONFIGURATION);
  private readonly translationService = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly matDialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);

  @ViewChildren('EntityContentTemplate', { read: ViewContainerRef })
  private containers!: QueryList<ViewContainerRef>;

  private readonly refreshTrigger = signal(0);
  private readonly filterText = signal('');
  private readonly refresh$ = toObservable(this.refreshTrigger);
  private readonly filter$ = toObservable(this.filterText);

  private get service() {
    return this.configuration.service;
  }

  public get entityIcon() {
    return this.configuration.icon;
  }

  // 🔹 Lista de entidades como signal reativo
  public readonly entities = toSignal(
    combineLatest([
      this.refresh$.pipe(startWith(0)),
      this.filter$.pipe(startWith('')),
    ]).pipe(switchMap(([_, filter]) => this.service.getAll({ filter }))),
    { initialValue: [] }
  );

  // Botões da toolbar
  private readonly refreshIcon = inject(RefreshIcon);
  private readonly goHomeButton = inject(GoHomeButtonConfiguration);
  public readonly registerButton = inject(RegisterEntityButton);

  private readonly refreshButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.refresh,
    icon: this.refreshIcon,
    onClick: () => this.refreshTrigger.update((v) => v + 1),
  });

  public toolbarConfiguration: ISdkToolbarConfiguration = {
    label: this.configuration.namePlural,
    icon: this.entityIcon,
    backgroundColor: VolvoColors.GreyOne,
    endButtons: [
      this.refreshButton,
      this.registerButton,
      this.goHomeButton,
    ],
  };

  private refreshSubscription!: Subscription;

  constructor() {
    // 🔹 Dispara refresh quando necessário
    this.refreshSubscription = this.service.listRefreshRequested.subscribe(() => {
      this.refreshButton.onClick();
    });

    this.entityIcon.changeColor(VolvoColors.Black);
    this.goHomeButton.icon.changeColor(VolvoColors.Black);

    // 🔹 Reage automaticamente à mudança de entities()
    effect(() => {
      const items = this.entities();
      if (!this.containers) return; // evita erro antes do AfterViewInit
      queueMicrotask(() => this.createDynamicCards());
    });
  }

  ngAfterViewInit(): void {
    // 🔹 Garante reconstrução quando containers são renderizados
    this.containers.changes.subscribe(() => this.createDynamicCards());
    this.createDynamicCards();
  }

  ngOnDestroy(): void {
    this.refreshSubscription?.unsubscribe();
  }

  private createDynamicCards(): void {
    if (!this.containers || this.containers.length === 0) return;

    const templateType = this.configuration.list.cards.contentTemplate;
    const items = this.entities();

    // 🔹 Garante mesma contagem (1 container por entidade)
    this.containers.forEach((container, index) => {
      container.clear();
      const entity = items[index];
      if (!entity) return;

      const ref = container.createComponent(templateType);
      (ref.instance as any).entity = entity;
    });

    this.changeDetector.detectChanges();
  }

  // Filtro
  onFilterChange(value: string) {
    this.filterText.set(value);
  }

  // 🔹 Botões de ação
  editButtonConfig(entity: EntityView) {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.edit,
      icon: new SdkIconConfiguration({
        name: 'edit',
        color: VolvoColors.Black,
      }),
      onClick: () => this.openEditModal(entity),
    });
  }

  removeButtonConfig(entity: EntityView): ISdkButtonConfiguration {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.remove,
      icon: new SdkIconConfiguration({
        name: 'delete',
        color: VolvoColors.Black,
      }),
      onClick: () => {
        this.matDialog
          .open(ConfirmationDialog, {
            data:
              this.translationService.translation.commons.remove +
              ' ' +
              this.configuration.nameSingular,
          })
          .afterClosed()
          .subscribe((result) => {
            if (!result) return;

            this.service.remove(entity.id).subscribe((response) => {
              if (!response) return;
              this.service.listRefreshRequested.next();
              this.snackBar.open(
                this.translationService.translation.commons.removed,
                'Ok',
                { duration: 3000 }
              );
            });
          });
      },
    });
  }

  openEditModal(entity: EntityView) {
    this.matDialog
      .open(EditEntityDialog, {
        data: {
          entity,
          configuration: this.configuration,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.service.listRefreshRequested.next();
      });
  }
}
