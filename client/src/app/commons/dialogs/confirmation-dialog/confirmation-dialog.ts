import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VolvoColors } from '@commons/colors';
import { WarningIcon } from '@commons/icons/icons';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIcon, SdkIconConfiguration } from "@sdk/icon/sdk-icon";

@Component({
  selector: 'app-confirmation-dialog',
  imports: [SdkIcon, SdkButton],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
  providers: [
    WarningIcon,
  ]
})
export class ConfirmationDialog {
  private readonly translationService = inject(TranslationService);

  public readonly warningIcon = inject(WarningIcon);
  public readonly areaYouSureLabel = this.translationService.translation.commons.areYouSure
  public readonly message = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);

  public readonly yesButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.yes,
    icon: new SdkIconConfiguration({
      name: 'check_circle',
      color: VolvoColors.LeafFour
    }),
    onClick: () => {
      this.dialogRef.close(true);
    }
  });

  public readonly noButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.no,
    icon: new SdkIconConfiguration({
      name: 'cancel',
      color: VolvoColors.Error
    }),
    onClick: () => {
      this.dialogRef.close(false);
    }
  });

}
