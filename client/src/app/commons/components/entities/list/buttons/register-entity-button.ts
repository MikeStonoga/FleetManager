import { Inject, inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIcon } from '@commons/icons/icons';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButtonConfiguration } from '@sdk/button/sdk-button';
import { ENTITY_CONFIGURATION, EntityConfiguration } from '../../entities.configuration';
import { RegisterEntityDialog } from '../dialogs/register/register-entity-dialog';

@Injectable()
export class RegisterEntityButton
extends SdkButtonConfiguration {
    constructor(
      dialog: MatDialog,
      @Inject(ENTITY_CONFIGURATION) entityConfiguration: EntityConfiguration,
    ) {
      super({
        label: inject(TranslationService).translation.commons.register,
        icon: inject(AddIcon),
        onClick: () => {
          dialog.open(RegisterEntityDialog, {
            data: {
              configuration: entityConfiguration,
            }
          })
        }
      });

    }
}
