import { Injectable } from "@angular/core";
import { AppTranslation } from "./app.translation";

@Injectable({
    providedIn: 'root'
})
export class BrazilianPortugueseTranslation 
implements AppTranslation {
    fleets = { 
        title: 'Frotas',
        fleet: 'Frota',
    };

    vehicles = { 
        title: 'Veículos', 
        vehicle: 'Veículo', 
    };

    vehicleTypes = { 
        title: 'Tipos de Veículos', 
        vehicleType: 'Tipo de Veículo', 
    };

    mainToolbar = {
        menus: {
            goTo: 'Ir para',
            home: 'Página Inicial',
        },
        buttons: { 
            goHome: { 
                label: 'Ir para página inicial'
            }
        }
    };

}