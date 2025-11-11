import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VolvoColors } from '@commons/colors';
import { ConfirmationDialog } from '@commons/dialogs/confirmation-dialog/confirmation-dialog';
import { AddIcon, RefreshIcon } from '@commons/icons/icons';
import { FleetIcon, FleetView } from '@commons/models/fleets.models';
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkButtonConfiguration, SdkButton, SdkButtonConfiguration } from '@sdk/button/sdk-button';
import { SdkIcon, SdkIconConfiguration } from '@sdk/icon/sdk-icon';
import { ISdkToolbarConfiguration, SdkToolbar } from "@sdk/toolbar/sdk-toolbar";
import { startWith, Subscription, switchMap } from 'rxjs';
import { GoHomeButtonConfiguration } from '../../main-toolbar/buttons/go-home.button-configuration';
import { FleetsService } from '../fleets';
import { RegisterFleetButton } from './buttons/register-fleet-button';
import { EditFleetDialog } from './edit-fleet-dialog/edit-fleet-dialog';

@Component({
  selector: 'app-fleets-list',
  imports: [
    CommonModule, 
    MatCardModule, 
    SdkButton,
    SdkIcon, 
    SdkToolbar
  ],
  templateUrl: './fleets-list.html',
  styleUrl: './fleets-list.scss',
  providers: [
    GoHomeButtonConfiguration,
    FleetIcon,
    RefreshIcon,
    AddIcon,
    RegisterFleetButton
  ]
})
export class FleetsList 
implements OnDestroy {

  private readonly service = inject(FleetsService);
  private readonly translationService = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly matDialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  
  public readonly fleetIcon = inject(FleetIcon);
  public readonly registerButton = inject(RegisterFleetButton);

  private readonly refreshIcon = inject(RefreshIcon);
  private readonly refreshTrigger = signal(0);
  private readonly refresh$ = toObservable(this.refreshTrigger);
  
  public readonly fleets = toSignal(
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
    label: this.translationService.translation.fleets.title,
    icon: this.fleetIcon,
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

    this.fleetIcon.changeColor(VolvoColors.Black);
    this.goHomeButton.icon.changeColor(VolvoColors.Black);

  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }

  editButtonConfig(fleet: FleetView) {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.edit,
      icon: new SdkIconConfiguration({ name: 'edit', color: VolvoColors.Black }),
      onClick: () => this.openEditModal(fleet),
    });
  }

  removeButtonConfig(fleet: FleetView): ISdkButtonConfiguration {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.remove,
      icon: new SdkIconConfiguration({ name: 'delete', color: VolvoColors.Black }),
      onClick: () => {
        this.matDialog.open(ConfirmationDialog, { data: this.translationService.translation.commons.remove + ' ' + fleet.name })
          .afterClosed()
          .subscribe(result => {
            if (!result)
              return;

            this.service.remove(fleet.id)
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

  detailsButtonConfig(fleet: FleetView) {
    return new SdkButtonConfiguration({
      label: this.translationService.translation.commons.goToDetails,
      icon: new SdkIconConfiguration({ name: 'open_in_new', color: VolvoColors.Black }),
      onClick: () => {
        this.service.currentSelected = fleet;
        this.router.navigate([`/restricted-area/fleets/details/${fleet.id}`])
      },
    });
  }

  openEditModal(fleet: FleetView) {
    this.matDialog.open(EditFleetDialog, {
      data: fleet
    })
  }
}
