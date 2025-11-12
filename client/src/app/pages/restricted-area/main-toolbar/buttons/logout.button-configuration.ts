import { Injectable } from "@angular/core";
import { VolvoColors } from "@commons/colors";
import { ICONS } from "@commons/icons/icons";
import { TranslationService } from "@commons/translations/translation.service";
import { SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { AuthenticationService } from "app/pages/public-area/authentication.service";

@Injectable({ providedIn: 'root'})
export class LogoutButton
extends SdkButtonConfiguration {
    constructor(
        authenticationService: AuthenticationService,
        translationService: TranslationService
    ) {
        super({
            label: translationService.translation.login.logoutLabel,
            icon: new SdkIconConfiguration({
                name: ICONS.Logout,
                color: VolvoColors.White
            }),
            onClick: () => authenticationService.logout()
        });
    }
}