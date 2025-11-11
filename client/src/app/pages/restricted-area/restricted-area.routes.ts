import { Routes } from "@angular/router";
import { Fleets } from "./fleets/fleets";
import { Home } from "./home/home";
import { VehiclesTypes } from "./vehicles-types/vehicles-types";
import { Vehicles } from "./vehicles/vehicles";

export const RESTRICTED_AREA_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'fleets',
        component: Fleets,
        loadChildren: () => import('./fleets/fleets.routes')
            .then(file => file.FLEETS_ROUTES),
    },
    {
        path: 'vehicles',
        component: Vehicles,
        loadChildren: () => import('./vehicles/vehicles.routes')
            .then(file => file.VEHICLES_ROUTES),
    },
    {
        path: 'vehicles-types',
        component: VehiclesTypes,
        loadChildren: () => import('./vehicles-types/vehicles-types.routes')
            .then(file => file.VEHICLES_TYPES_ROUTES),
    },
]
    