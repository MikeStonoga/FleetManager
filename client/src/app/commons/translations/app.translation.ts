export interface AppTranslation {
    login: {
        enter: string;
        user: string;
        password: string;
        logoutLabel: string;
    };

    commons: {
        selectLanguage: string;
        filter: string;
        yes: string;
        no: string;
        areYouSure: string;
        removed: string;
        remove: string;
        registered: string;
        register: string;
        refresh: string;
        save: string;
        properties: {
            name: string;
        };
        vehiclesCount: string;
        goToDetails: string;
        edit: string;
        edited: string;
        goBackToList: string;
    };

    fleets: {
        title: string;
        fleet: string;
    };
    
    vehicles: {
        title: string;
        vehicle: string;
        chassisSeries: string;
        chassisNumber: string;
        fleet: string;
        type: string;
        numberOfPassengers: string;
        color: string;
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