import { inject, Injectable } from '@angular/core';
import { AppTranslation } from './app.translation';
import { BrazilianPortugueseTranslation } from './brazilian-portuguese.translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public translation: AppTranslation =  inject(BrazilianPortugueseTranslation);
  
}
