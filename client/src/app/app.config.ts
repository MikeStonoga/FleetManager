import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoadingInterceptor } from '@commons/interceptors/loading.interceptor';
import { APP_TRANSLATIONS } from '@commons/translations/app.traslations.ioc';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([LoadingInterceptor])),
    ...APP_TRANSLATIONS,
    
  ]
};
