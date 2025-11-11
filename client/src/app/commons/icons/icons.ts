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

@Injectable()
export class HomeIcon 
extends SdkIconConfiguration {

    constructor() {
        super({
            name: ICONS.Home
        });
    }
}

@Injectable()
export class SaveIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Save
        });
    }
}

@Injectable()
export class RefreshIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Refresh
        });
    }
}

@Injectable()
export class AddIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Add
        });
    }
}


@Injectable()
export class WarningIcon 
extends SdkIconConfiguration {
    constructor() {
        super({
            name: ICONS.Warning
        });
    }
}


