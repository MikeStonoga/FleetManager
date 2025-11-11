export interface AppTranslation {
    fleets: {
        title: string;
        fleet: string;
    };
    
    vehicles: {
        title: string;
        vehicle: string;
    };
    
    vehicleTypes: {
        title: string;
        vehicleType: string;
    };

    mainToolbar: {
        menus: {
            goTo: string;
            home: string;
        },
        buttons: {
            goHome: {
                label: string;
            }
        }
    }
}