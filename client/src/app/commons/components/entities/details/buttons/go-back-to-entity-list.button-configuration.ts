import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ICONS } from "@commons/icons/icons";
import { TranslationService } from "@commons/translations/translation.service";
import { SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { ENTITY_CONFIGURATION, EntityConfiguration } from "../../entities.configuration";

@Injectable()
export class GoBackToEntityListButton
extends SdkButtonConfiguration {
  constructor(
    translationService: TranslationService,
    router: Router,
    @Inject(ENTITY_CONFIGURATION) configuration: EntityConfiguration,
  ) {
    super({
      label: translationService.translation.commons.goBackToList,
      icon: new SdkIconConfiguration({
        name: ICONS.BackToList,
      }),
      onClick: () => {
        configuration.service.currentSelected = undefined;
        router.navigateByUrl(`/restricted-area/${configuration.entityRoute}/list`);
      }
    });
  }
}
