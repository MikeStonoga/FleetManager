import { Routes } from "@angular/router";
import { FleetVehicles } from "./fleet-vehicles/fleet-vehicles";

export const FLEET_DETAILS_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vehicles',
    },
    {
        path: 'vehicles',
        component: FleetVehicles,
    }
] ;