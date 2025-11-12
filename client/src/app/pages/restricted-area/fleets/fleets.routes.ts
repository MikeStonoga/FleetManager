import { Routes } from "@angular/router";
import { EntitiesList } from "@commons/components/entities/list/entities-list";
import { FleetDetails } from "./details/fleet-details";

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
        component: FleetDetails,
        loadChildren: () => import('./details/fleet-details.routes')
            .then(file => file.FLEET_DETAILS_ROUTES),
    }
];