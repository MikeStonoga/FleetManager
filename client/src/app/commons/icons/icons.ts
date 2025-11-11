import { Injectable } from "@angular/core";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

export const ICONS = {
    Home: 'home',
    Fleet: 'traffic_jam',
    Vehicle: 'local_shipping',
    VehicleType: 'category'
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