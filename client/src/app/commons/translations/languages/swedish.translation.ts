import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const swedishTranslation: AppTranslation = {
  login: {
    enter: 'Logga in',
    user: 'Användarnamn',
    password: 'Lösenord',
    logoutLabel: 'Logga ut',
  },
  commons: {
    filter: 'Filtrera',
    yes: 'Ja',
    no: 'Nej',
    selectLanguage: 'Välj språk',
    areYouSure: 'Är du säker?',
    removed: 'Borttagen framgångsrikt',
    remove: 'Ta bort',
    registered: 'Registrerad framgångsrikt',
    register: 'Registrera',
    refresh: 'Uppdatera',
    save: 'Spara',
    properties: { name: 'Namn' },
    vehiclesCount: 'Antal fordon',
    goToDetails: 'Visa detaljer',
    edit: 'Redigera',
    edited: 'Redigerad framgångsrikt',
    goBackToList: 'Tillbaka till listan',
  },
  fleets: {
    title: 'Fordonsflottor',
    fleet: 'Flotta',
  },
  vehicles: {
    title: 'Fordon',
    vehicle: 'Fordon',
    chassisSeries: 'Chassinummer-serie',
    chassisNumber: 'Chassinummer',
    fleet: 'Flotta',
    type: 'Typ',
    numberOfPassengers: 'Antal passagerare',
    color: 'Färg',
  },
  vehicleTypes: {
    title: 'Fordonstyper',
    vehicleType: 'Fordonstyp',
  },
  mainToolbar: {
    menus: {
      goTo: 'Gå till',
      home: 'Hem',
    },
    buttons: {
      goHome: { label: 'Gå till startsidan' },
    },
  },
};

@Injectable()
export class SwedishStrategy implements ITranslationStrategy {
  readonly languageCode = 'sv-SE';
  readonly languageName = 'Svenska';

  getTranslation(): AppTranslation {
    return swedishTranslation;
  }
}
