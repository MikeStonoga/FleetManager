import { Injectable } from "@angular/core";
import { VolvoColors } from "@commons/colors";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { EntityView } from "./entity.models";

export interface FleetView 
extends EntityView {
    name: string;
    vehicleCount: number;
}

export interface RegisterFleetRequirement {
    name: string;
}

export interface UpdateFleetRequirement {
    id: string;
    name: string;
}

@Injectable({ providedIn: 'root' })
export class FleetIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Fleet,
            color: VolvoColors.Black
        });
    }
}