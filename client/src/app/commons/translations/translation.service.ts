import { Inject, Injectable, Optional } from '@angular/core';
import { AppTranslation } from './app.translation';
import { ITranslationStrategy, TRANSLATION_STRATEGIES } from './translation.strategy';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _currentStrategy!: ITranslationStrategy;
  public translation!: AppTranslation;

  constructor(
    @Optional() @Inject(TRANSLATION_STRATEGIES) private readonly strategies: ITranslationStrategy[] = []
  ) {
    if (this.strategies.length === 0) {
      console.warn('⚠️ Nenhuma estratégia de tradução registrada!');
      return;
    }

    this.initialize(); 
  }

  public initialize(): void {
    const saved = localStorage.getItem('app.language');
    const defaultCode = saved ?? this.strategies[0].languageCode;

    const found = this.strategies.find(s => s.languageCode === defaultCode);
    this._currentStrategy = found ?? this.strategies[0];
    this.translation = this._currentStrategy.getTranslation();
  }

  public get availableLanguages() {
    return this.strategies.map(s => ({
      code: s.languageCode,
      name: s.languageName,
    }));
  }

  public setLanguage(languageCode: string): void {
    const found = this.strategies.find(s => s.languageCode === languageCode);
    if (!found || found.languageCode === this._currentStrategy.languageCode)
      return;

    localStorage.setItem('app.language', languageCode);
    location.reload(); 
  }

  public get currentLanguage() {
    return this._currentStrategy?.languageCode ?? '';
  }
}
