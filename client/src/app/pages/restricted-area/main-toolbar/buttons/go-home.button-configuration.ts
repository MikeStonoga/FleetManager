import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { VolvoColors } from "@commons/colors";
import { ICONS } from "@commons/icons/icons";
import { TranslationService } from "@commons/translations/translation.service";
import { SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

@Injectable()
export class GoHomeButtonConfiguration 
extends SdkButtonConfiguration {
    constructor(
        translationService: TranslationService,
        router: Router,
    ) {
        super({
           label:  translationService.translation.mainToolbar.buttons.goHome.label,
           icon: new SdkIconConfiguration({
            name: ICONS.Home,
            color: VolvoColors.White,
           }),
           onClick: ($event) => {
            router.navigateByUrl('/restricted-area/home');
           }
        })
    }
}