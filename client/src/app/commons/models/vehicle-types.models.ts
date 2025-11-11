import { Injectable } from "@angular/core";
import { ICONS } from "@commons/icons/icons";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

@Injectable()
export class VehicleTypeIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.VehicleType,
        });
    }
}