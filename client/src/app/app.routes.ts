import { Routes } from '@angular/router';
import { RestrictedArea } from './pages/restricted-area/restricted-area';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'restricted-area'
    },
    {
        path: 'restricted-area',
        component: RestrictedArea,
        loadChildren: () => import('./pages/restricted-area/restricted-area.routes')
            .then(file => file.RESTRICTED_AREA_ROUTES),
    }
];
