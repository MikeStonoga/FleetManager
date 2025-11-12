import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const polishTranslation: AppTranslation = {
  login: {
    enter: 'Zaloguj się',
    user: 'Użytkownik',
    password: 'Hasło',
    logoutLabel: 'Wyloguj się',
  },
  commons: {
    filter: 'Filtruj',
    yes: 'Tak',
    no: 'Nie',
    selectLanguage: 'Wybierz język',
    areYouSure: 'Czy na pewno?',
    removed: 'Usunięto pomyślnie',
    remove: 'Usuń',
    registered: 'Zarejestrowano pomyślnie',
    register: 'Zarejestruj',
    refresh: 'Odśwież',
    save: 'Zapisz',
    properties: { name: 'Nazwa' },
    vehiclesCount: 'Liczba pojazdów',
    goToDetails: 'Zobacz szczegóły',
    edit: 'Edytuj',
    edited: 'Pomyślnie edytowano',
    goBackToList: 'Wróć do listy',
  },
  fleets: {
    title: 'Floty',
    fleet: 'Flota',
  },
  vehicles: {
    title: 'Pojazdy',
    vehicle: 'Pojazd',
    chassisSeries: 'Seria podwozia',
    chassisNumber: 'Numer podwozia',
    fleet: 'Flota',
    type: 'Typ',
    numberOfPassengers: 'Liczba pasażerów',
    color: 'Kolor',
  },
  vehicleTypes: {
    title: 'Typy pojazdów',
    vehicleType: 'Typ pojazdu',
  },
  mainToolbar: {
    menus: {
      goTo: 'Przejdź do',
      home: 'Strona główna',
    },
    buttons: {
      goHome: { label: 'Strona główna' },
    },
  },
};

@Injectable()
export class PolishStrategy implements ITranslationStrategy {
  readonly languageCode = 'pl-PL';
  readonly languageName = 'Polski';

  getTranslation(): AppTranslation {
    return polishTranslation;
  }
}
