import { Injectable } from "@angular/core";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

export const ICONS = {
    Home: 'home'
}

@Injectable({providedIn: 'root'})
export class HomeIcon 
extends SdkIconConfiguration {

    constructor() {
        super({
            name: ICONS.Home
        });
    }
}