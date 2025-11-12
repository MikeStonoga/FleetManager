import { Injectable } from "@angular/core";
import { AppTranslation } from "./app.translation";

@Injectable({
    providedIn: 'root'
})
export class BrazilianPortugueseTranslation 
implements AppTranslation {
    commons = {
        yes: 'Sim',
        no: 'Não',
        register: 'Registrar',
        areYouSure: 'Está certo disto?',
        registered: 'Registrado',
        refresh: 'Atualizar',
        goBackToList: 'Voltar para a Lista',
        goToDetails: 'Ir para Detalhes',
        edit: 'Editar',
        edited: 'Editado',
        remove: 'Remover',
        removed: 'Removido',
        save: 'Salvar',
        vehiclesCount: 'Número de veículos:',
        properties: {
            name: 'Nome'
        },
    };
    
    fleets = { 
        title: 'Frotas',
        fleet: 'Frota',
    };

    vehicles = { 
        title: 'Veículos', 
        vehicle: 'Veículo', 
        chassisSeries: 'Série do Chassi',
        chassisNumber: 'Nº do Chassi',
        fleet: 'Frota',
        type: 'Tipo',
        numberOfPassengers: 'Nº de Passageiros',
        color: 'Cor',
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