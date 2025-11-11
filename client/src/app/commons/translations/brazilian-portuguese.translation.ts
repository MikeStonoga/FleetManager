import { Injectable } from "@angular/core";
import { AppTranslation } from "./app.translation";

@Injectable({
    providedIn: 'root'
})
export class BrazilianPortugueseTranslation 
implements AppTranslation {
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