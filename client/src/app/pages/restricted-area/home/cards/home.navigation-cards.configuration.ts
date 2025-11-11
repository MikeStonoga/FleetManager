import { Injectable } from "@angular/core";
import { INavigationCard, INavigationCardsConfiguration, NavigationCard } from "@commons/components/navigation-cards/navigation-cards";
import { FleetIcon } from "@commons/models/fleets.models";
import { VehicleTypeIcon } from "@commons/models/vehicle-types.models";
import { VehicleIcon } from "@commons/models/vehicles.models";
import { TranslationService } from "@commons/translations/translation.service";

@Injectable() 
export class HomeNavigationCardsConfiguration 
implements INavigationCardsConfiguration {
    
    public readonly cards: INavigationCard[];

    constructor(
        tranlationService: TranslationService,
        fleetIcon: FleetIcon,
        vehicleIcon: VehicleIcon,
        vehicleTypeIcon: VehicleTypeIcon,
    ) {
        const translation = tranlationService.translation;
        this.cards = [
            new NavigationCard({
                label: translation.fleets.title,
                icon: fleetIcon,
                route: 'fleets'
            }),
            new NavigationCard({
                label: translation.vehicles.title,
                icon: vehicleIcon,
                route: 'vehicles'
            }),
            new NavigationCard({
                label: translation.vehicleTypes.title,
                icon: vehicleTypeIcon,
                route: 'vehicles-types'
            }),
        ];
    }

}