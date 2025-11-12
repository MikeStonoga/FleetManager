import { AppTranslation } from './app.translation';

import { InjectionToken } from '@angular/core';

export const TRANSLATION_STRATEGIES = new InjectionToken<ITranslationStrategy[]>(
  'TRANSLATION_STRATEGIES'
);

export interface ITranslationStrategy {
  languageCode: string;          
  languageName: string;          
  getTranslation(): AppTranslation;
}
