import { Injectable } from "@angular/core";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { EntityView } from "./entity.models";


export interface VehicleTypeView 
extends EntityView {
    name: string;
    numberOfPassengers: number;
    vehiclesCount: number;
}

export interface RegisterVehicleTypeRequirement {
    name: string;
    numberOfPassengers: number;
}

export interface UpdateVehicleTypeRequirement {
    id: string;
    name: string;
    numberOfPassengers: number;
}

@Injectable({ providedIn: 'root' })
export class VehicleTypeIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.VehicleType,
        });
    }
}