import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const italianTranslation: AppTranslation = {
  login: {
    enter: 'Accedi',
    user: 'Utente',
    password: 'Password',
    logoutLabel: 'Disconnettersi',
  },
  commons: {
    filter: 'Filtra',
    yes: 'Sì',
    no: 'No',
    selectLanguage: 'Seleziona lingua',
    areYouSure: 'Sei sicuro?',
    removed: 'Rimosso con successo',
    remove: 'Rimuovere',
    registered: 'Registrato con successo',
    register: 'Registrare',
    refresh: 'Aggiorna',
    save: 'Salva',
    properties: { name: 'Nome' },
    vehiclesCount: 'Numero di veicoli',
    goToDetails: 'Vedi dettagli',
    edit: 'Modifica',
    edited: 'Modificato con successo',
    goBackToList: 'Torna alla lista',
  },
  fleets: {
    title: 'Flotte',
    fleet: 'Flotta',
  },
  vehicles: {
    title: 'Veicoli',
    vehicle: 'Veicolo',
    chassisSeries: 'Serie del telaio',
    chassisNumber: 'Numero del telaio',
    fleet: 'Flotta',
    type: 'Tipo',
    numberOfPassengers: 'Numero di passeggeri',
    color: 'Colore',
  },
  vehicleTypes: {
    title: 'Tipi di veicoli',
    vehicleType: 'Tipo di veicolo',
  },
  mainToolbar: {
    menus: {
      goTo: 'Vai a',
      home: 'Home',
    },
    buttons: {
      goHome: { label: 'Pagina iniziale' },
    },
  },
};

@Injectable()
export class ItalianStrategy implements ITranslationStrategy {
  readonly languageCode = 'it-IT';
  readonly languageName = 'Italiano';

  getTranslation(): AppTranslation {
    return italianTranslation;
  }
}
