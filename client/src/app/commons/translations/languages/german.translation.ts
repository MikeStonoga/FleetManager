import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const germanTranslation: AppTranslation = {
  login: {
    enter: 'Anmelden',
    user: 'Benutzername',
    password: 'Passwort',
    logoutLabel: 'Abmelden',
  },
  commons: {
    filter: 'Filtern',
    yes: 'Ja',
    no: 'Nein',
    selectLanguage: 'Sprache auswählen',
    areYouSure: 'Sind Sie sicher?',
    removed: 'Erfolgreich entfernt',
    remove: 'Entfernen',
    registered: 'Erfolgreich registriert',
    register: 'Registrieren',
    refresh: 'Aktualisieren',
    save: 'Speichern',
    properties: { name: 'Name' },
    vehiclesCount: 'Anzahl der Fahrzeuge',
    goToDetails: 'Details anzeigen',
    edit: 'Bearbeiten',
    edited: 'Erfolgreich bearbeitet',
    goBackToList: 'Zurück zur Liste',
  },
  fleets: {
    title: 'Flotten',
    fleet: 'Flotte',
  },
  vehicles: {
    title: 'Fahrzeuge',
    vehicle: 'Fahrzeug',
    chassisSeries: 'Fahrgestellserie',
    chassisNumber: 'Fahrgestellnummer',
    fleet: 'Flotte',
    type: 'Typ',
    numberOfPassengers: 'Anzahl der Passagiere',
    color: 'Farbe',
  },
  vehicleTypes: {
    title: 'Fahrzeugtypen',
    vehicleType: 'Fahrzeugtyp',
  },
  mainToolbar: {
    menus: {
      goTo: 'Gehe zu',
      home: 'Startseite',
    },
    buttons: {
      goHome: { label: 'Startseite' },
    },
  },
};

@Injectable()
export class GermanStrategy implements ITranslationStrategy {
  readonly languageCode = 'de-DE';
  readonly languageName = 'Deutsch';

  getTranslation(): AppTranslation {
    return germanTranslation;
  }
}
