import { Component } from '@angular/core';
import { NAVIGATION_CARDS_CONFIGURATION, NavigationCards } from "@commons/components/navigation-cards/navigation-cards";
import { FleetIcon } from '@commons/models/fleets.models';
import { VehicleTypeIcon } from '@commons/models/vehicle-types.models';
import { VehicleIcon } from '@commons/models/vehicles.models';
import { HomeNavigationCardsConfiguration } from './cards/home.navigation-cards.configuration';

@Component({
  selector: 'app-home',
  imports: [NavigationCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [
    FleetIcon,
    VehicleIcon,
    VehicleTypeIcon,
    {
      provide: NAVIGATION_CARDS_CONFIGURATION,
      useClass: HomeNavigationCardsConfiguration,
    },
  ]
})
export class Home {

}
