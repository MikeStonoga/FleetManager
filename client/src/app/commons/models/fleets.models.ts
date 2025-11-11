import { Injectable } from "@angular/core";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { EntityView } from "./entity.models";

export interface FleetView 
extends EntityView {
    name: string;
}

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