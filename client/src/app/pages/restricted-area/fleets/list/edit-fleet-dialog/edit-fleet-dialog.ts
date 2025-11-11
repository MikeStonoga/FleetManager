import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveIcon } from '@commons/icons/icons';
import { FleetIcon, UpdateFleetRequirement } from '@commons/models/fleets.models';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIcon } from "@sdk/icon/sdk-icon";
import { FleetsService } from '../../fleets';

@Component({
  selector: 'app-edit-fleet-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
    SdkButton
],
  templateUrl: './edit-fleet-dialog.html',
  styleUrl: './edit-fleet-dialog.scss',
  providers: [
    FleetIcon,
    SaveIcon,
  ]
})
export class EditFleetDialog {

  public readonly fleet = inject(MAT_DIALOG_DATA);
  public readonly fleetIcon = inject(FleetIcon);
  private readonly translationService = inject(TranslationService);
  public readonly nameLabel = this.translationService.translation.commons.properties.name;
  private readonly matDialogRef = inject(MatDialogRef);
  private readonly snackBar = inject(MatSnackBar);

  public readonly form = new FormGroup({
    name: new FormControl<string | null>({ value: this.fleet.name, disabled: false }, Validators.required),
  });

  private readonly service = inject(FleetsService);

  public readonly saveButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.save,
    icon: inject(SaveIcon),
    onClick: () => {
      const canSave = !(this.form.dirty && this.form.valid);
      
      if (canSave)
        return;

      const requirement: UpdateFleetRequirement = {
        id: this.fleet.id,
        name: this.form.controls.name.value!,
      }
      
      this.service
        .update(requirement)
        .subscribe(response => {
          this.service.listRefreshRequested.next();
          
          this.snackBar.open(this.translationService.translation.commons.edited, 'Ok', { duration: 3000 });

          this.matDialogRef.close(response);
        })
    }
  });


}
