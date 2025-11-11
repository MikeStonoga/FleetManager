import { Injectable } from "@angular/core";
import { VolvoColors } from "@commons/colors";
import { HomeIcon } from "@commons/icons/icons";
import { TranslationService } from "@commons/translations/translation.service";
import { ISdkIconConfiguration } from "../../sdk/icon/sdk-icon";

export interface IMenu {
    label: string;
    icon: ISdkIconConfiguration;
    route: string;
}

@Injectable({
    providedIn: 'root'
})
export class Menus 
extends Array<IMenu> {
    constructor(
        private readonly translationService: TranslationService,
        private readonly homeIcon: HomeIcon,
    ) {
        super();
        this.homeIcon.changeColor(VolvoColors.White);

        this.addHomeButton();
    }

    private addHomeButton() {
        this.push({
            label: this.translationService.translation.mainToolbar.menus.home,
            icon: this.homeIcon,
            route: 'home',
        })
    }
}