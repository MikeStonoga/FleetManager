import { Injectable } from "@angular/core";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";

export const ICONS = {
    Home: 'home',
    Fleet: 'traffic_jam',
    Vehicle: 'local_shipping',
    VehicleType: 'category',
    BackToList: 'undo',
    Save: 'save',
    Refresh: 'refresh',
    Add: 'add_circle',
    Warning: 'warning',
}

@Injectable({ providedIn: 'root' })
export class HomeIcon 
extends SdkIconConfiguration {

    constructor() {
        super({
            name: ICONS.Home
        });
    }
}

@Injectable({ providedIn: 'root' })
export class SaveIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Save
        });
    }
}

@Injectable({ providedIn: 'root' })
export class RefreshIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Refresh
        });
    }
}

@Injectable({ providedIn: 'root' })
export class AddIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Add
        });
    }
}


@Injectable({ providedIn: 'root' })
export class WarningIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Warning
        });
    }
}


