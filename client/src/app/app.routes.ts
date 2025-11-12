import { Routes } from '@angular/router';
import { authGuard } from '@commons/guards/auth.guard';
import { PublicArea } from './pages/public-area/public-area';
import { RestrictedArea } from './pages/restricted-area/restricted-area';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public-area',
    },
    {
        path: 'public-area',
        component: PublicArea,
        loadChildren: () => import('./pages/public-area/public-area.routes')
            .then(file => file.PUBLIC_AREA_ROUTES),
    },
    {
        path: 'restricted-area',
        component: RestrictedArea,
        canActivate: [authGuard],
        loadChildren: () => import('./pages/restricted-area/restricted-area.routes')
            .then(file => file.RESTRICTED_AREA_ROUTES),
    }
];
