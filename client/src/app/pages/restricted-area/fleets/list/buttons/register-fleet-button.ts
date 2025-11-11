import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIcon } from '@commons/icons/icons';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButtonConfiguration } from '@sdk/button/sdk-button';
import { FleetsService } from '../../fleets';
import { RegisterFleetDialog } from '../register-fleet-dialog/register-fleet-dialog';

@Injectable()
export class RegisterFleetButton 
extends SdkButtonConfiguration {
    constructor(
      dialog: MatDialog,
      private readonly service: FleetsService,
    ) {
      super({
        label: inject(TranslationService).translation.commons.register,
        icon: inject(AddIcon),
        onClick: () => {
          dialog.open(RegisterFleetDialog)
        }
      });

    }
}
