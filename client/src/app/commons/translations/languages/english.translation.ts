import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const englishTranslation: AppTranslation = {
  login: {
    enter: 'Sign in',
    user: 'User',
    password: 'Password',
    logoutLabel: 'Logout',
  },
  commons: {
    filter: 'Filter',
    yes: 'Yes',
    no: 'No',
    selectLanguage: 'Select Language',
    areYouSure: 'Are you sure?',
    removed: 'Removed successfully',
    remove: 'Remove',
    registered: 'Registered successfully',
    register: 'Register',
    refresh: 'Refresh',
    save: 'Save',
    properties: { name: 'Name' },
    vehiclesCount: 'Vehicle count',
    goToDetails: 'Go to details',
    edit: 'Edit',
    edited: 'Edited successfully',
    goBackToList: 'Go back to list',
  },
  fleets: {
    title: 'Fleets',
    fleet: 'Fleet',
  },
  vehicles: {
    title: 'Vehicles',
    vehicle: 'Vehicle',
    chassisSeries: 'Chassis series',
    chassisNumber: 'Chassis number',
    fleet: 'Fleet',
    type: 'Type',
    numberOfPassengers: 'Number of passengers',
    color: 'Color',
  },
  vehicleTypes: {
    title: 'Vehicle types',
    vehicleType: 'Vehicle type',
  },
  mainToolbar: {
    menus: {
      goTo: 'Go to',
      home: 'Home',
    },
    buttons: {
      goHome: { label: 'Go home' },
    },
  },
};

@Injectable()
export class EnglishStrategy implements ITranslationStrategy {
  readonly languageCode = 'en-US';
  readonly languageName = 'English';

  getTranslation(): AppTranslation {
    return englishTranslation;
  }
}
