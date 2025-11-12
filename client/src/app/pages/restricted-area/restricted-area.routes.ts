import { Routes } from "@angular/router";
import { Entities } from "@commons/components/entities/entities";
import { ENTITY_CONFIGURATION } from "@commons/components/entities/entities.configuration";
import { FleetsConfiguration } from "./fleets/fleets.configuration";
import { Home } from "./home/home";
import { VehiclesTypesConfiguration } from "./vehicles-types/vehicles-types.configuration";
import { VehiclesConfiguration } from "./vehicles/vehicles.configuration";

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
        component: Entities,
        loadChildren: () => import('./fleets/fleets.routes')
            .then(file => file.FLEETS_ROUTES),
        providers: [
            {
                provide: ENTITY_CONFIGURATION,
                useClass: FleetsConfiguration
            }
        ]
    },
    {
        path: 'vehicles',
        component: Entities,
        loadChildren: () => import('./vehicles/vehicles.routes')
            .then(file => file.VEHICLES_ROUTES),
        providers: [
            {
                provide: ENTITY_CONFIGURATION,
                useClass: VehiclesConfiguration
            }
        ]
    },
    {
        path: 'vehicles-types',
        component: Entities,
        loadChildren: () => import('./vehicles-types/vehicles-types.routes')
            .then(file => file.VEHICLES_TYPES_ROUTES),
        providers: [
            {
                provide: ENTITY_CONFIGURATION,
                useClass: VehiclesTypesConfiguration
            }
        ]
    },
]
    