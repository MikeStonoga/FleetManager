import { Injectable } from "@angular/core";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { EntityView } from "./entity.models";

export interface VehicleView 
extends EntityView {
    fleetId: string;
    fleetCode: number;
    fleetName: string;

    chassisSeries: string;
    chassisNumber: number;
    chassisId: string;

    typeId: string;
    typeCode: number;
    typeName: string;

    color: string;
    numberOfPassengers: number;

}

export interface RegisterVehicleRequirement {
    fleetId: string;
    typeId: string;
    chassisSeries: string;
    chassisNumber: number;
    color: string;
}

export interface UpdateVehicleRequirement {
    id: string;
    color: string;
}


@Injectable({ providedIn: 'root' })
export class VehicleIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Vehicle,
        });
    }
}