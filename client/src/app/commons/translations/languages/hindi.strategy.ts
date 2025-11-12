import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const hindiTranslation: AppTranslation = {
  login: {
    enter: 'लॉगिन करें',
    user: 'उपयोगकर्ता',
    password: 'पासवर्ड',
    logoutLabel: 'लॉगआउट करें',
  },
  commons: {
    filter: 'फ़िल्टर',
    yes: 'हाँ',
    no: 'नहीं',
    selectLanguage: 'भाषा चुनें',
    areYouSure: 'क्या आप सुनिश्चित हैं?',
    removed: 'सफलतापूर्वक हटाया गया',
    remove: 'हटाएँ',
    registered: 'सफलतापूर्वक पंजीकृत',
    register: 'पंजीकरण करें',
    refresh: 'ताज़ा करें',
    save: 'सहेजें',
    properties: { name: 'नाम' },
    vehiclesCount: 'वाहनों की संख्या',
    goToDetails: 'विवरण देखें',
    edit: 'संपादित करें',
    edited: 'सफलतापूर्वक संपादित किया गया',
    goBackToList: 'सूची पर वापस जाएँ',
  },
  fleets: {
    title: 'वाहन बेड़े',
    fleet: 'बेड़ा',
  },
  vehicles: {
    title: 'वाहन',
    vehicle: 'वाहन',
    chassisSeries: 'चेसिस श्रृंखला',
    chassisNumber: 'चेसिस संख्या',
    fleet: 'बेड़ा',
    type: 'प्रकार',
    numberOfPassengers: 'यात्रियों की संख्या',
    color: 'रंग',
  },
  vehicleTypes: {
    title: 'वाहन प्रकार',
    vehicleType: 'वाहन प्रकार',
  },
  mainToolbar: {
    menus: {
      goTo: 'पर जाएं',
      home: 'मुखपृष्ठ',
    },
    buttons: {
      goHome: { label: 'मुखपृष्ठ' },
    },
  },
};

@Injectable()
export class HindiStrategy implements ITranslationStrategy {
  readonly languageCode = 'hi-IN';
  readonly languageName = 'हिन्दी (Hindi)';

  getTranslation(): AppTranslation {
    return hindiTranslation;
  }
}
