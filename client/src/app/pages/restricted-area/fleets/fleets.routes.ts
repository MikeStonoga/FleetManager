import { Routes } from "@angular/router";
import { FleetDetails } from "./details/fleet-details";
import { FleetsList } from "./list/fleets-list";

export const FLEETS_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: FleetsList,
    },
    {
        path: 'details/:id',
        component: FleetDetails,
        loadChildren: () => import('./details/fleet-details.routes')
            .then(file => file.FLEET_DETAILS_ROUTES),
    }
];