import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveIcon } from '@commons/icons/icons';
import { FleetIcon, RegisterFleetRequirement } from '@commons/models/fleets.models';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIcon } from "@sdk/icon/sdk-icon";
import { FleetsService } from '../../fleets';

@Component({
  selector: 'app-register-fleet-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
    SdkButton
],
  templateUrl: './register-fleet-dialog.html',
  styleUrl: './register-fleet-dialog.scss',
  providers: [
    FleetIcon,
    SaveIcon,
  ]
})
export class RegisterFleetDialog {

  public readonly fleetIcon = inject(FleetIcon);
  private readonly translationService = inject(TranslationService);
  public readonly nameLabel = this.translationService.translation.commons.properties.name;
  public readonly fleetLabel = this.translationService.translation.fleets.fleet + ' - ' + this.translationService.translation.commons.register;
  private readonly matDialogRef = inject(MatDialogRef);
  private readonly snackBar = inject(MatSnackBar);

  public readonly form = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
  });

  private readonly service = inject(FleetsService);

  public readonly saveButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.save,
    icon: inject(SaveIcon),
    onClick: () => {
      const canSave = !(this.form.dirty && this.form.valid);
      
      if (canSave)
        return;

      const requirement: RegisterFleetRequirement = {
        name: this.form.controls.name.value!,
      }
      
      this.service
        .register(requirement)
        .subscribe(response => {
          this.service.listRefreshRequested.next();
          
          this.snackBar.open(this.translationService.translation.commons.registered, 'Ok', { duration: 3000 });

          this.matDialogRef.close(response);
        })
    }
  });


}
