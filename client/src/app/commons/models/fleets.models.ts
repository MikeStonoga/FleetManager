import { Injectable } from "@angular/core";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

@Injectable({
    providedIn: 'root'
})
export class FleetIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Fleet,
        });
    }
}