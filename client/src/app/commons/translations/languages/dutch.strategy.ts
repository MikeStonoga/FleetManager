import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const dutchTranslation: AppTranslation = {
  login: {
    enter: 'Inloggen',
    user: 'Gebruiker',
    password: 'Wachtwoord',
    logoutLabel: 'Uitloggen',
  },
  commons: {
    filter: 'Filteren',
    yes: 'Ja',
    no: 'Nee',
    selectLanguage: 'Taal selecteren',
    areYouSure: 'Weet je het zeker?',
    removed: 'Succesvol verwijderd',
    remove: 'Verwijderen',
    registered: 'Succesvol geregistreerd',
    register: 'Registreren',
    refresh: 'Vernieuwen',
    save: 'Opslaan',
    properties: { name: 'Naam' },
    vehiclesCount: 'Aantal voertuigen',
    goToDetails: 'Bekijk details',
    edit: 'Bewerken',
    edited: 'Succesvol bewerkt',
    goBackToList: 'Terug naar de lijst',
  },
  fleets: {
    title: 'Vloten',
    fleet: 'Vloot',
  },
  vehicles: {
    title: 'Voertuigen',
    vehicle: 'Voertuig',
    chassisSeries: 'Chassis-serie',
    chassisNumber: 'Chassisnummer',
    fleet: 'Vloot',
    type: 'Type',
    numberOfPassengers: 'Aantal passagiers',
    color: 'Kleur',
  },
  vehicleTypes: {
    title: 'Voertuigtypen',
    vehicleType: 'Voertuigtype',
  },
  mainToolbar: {
    menus: {
      goTo: 'Ga naar',
      home: 'Startpagina',
    },
    buttons: {
      goHome: { label: 'Startpagina' },
    },
  },
};

@Injectable()
export class DutchStrategy implements ITranslationStrategy {
  readonly languageCode = 'nl-NL';
  readonly languageName = 'Nederlands';

  getTranslation(): AppTranslation {
    return dutchTranslation;
  }
}
