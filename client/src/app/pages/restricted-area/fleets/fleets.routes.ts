import { Routes } from "@angular/router";
import { EntityDetails } from "@commons/components/entities/details/entity-details";
import { EntitiesList } from "@commons/components/entities/list/entities-list";

export const FLEETS_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: EntitiesList,
    },
    {
        path: 'details/:id',
        component: EntityDetails,
        loadChildren: () => import('./details/fleet-details.routes')
            .then(file => file.FLEET_DETAILS_ROUTES),
    }
];