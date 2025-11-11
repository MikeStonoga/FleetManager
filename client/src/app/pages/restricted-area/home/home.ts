import { Component } from '@angular/core';
import { NAVIGATION_CARDS_CONFIGURATION, NavigationCards } from "@commons/components/navigation-cards/navigation-cards";
import { HomeNavigationCardsConfiguration } from './cards/home.navigation-cards.configuration';

@Component({
  selector: 'app-home',
  imports: [NavigationCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [
    {
      provide: NAVIGATION_CARDS_CONFIGURATION,
      useClass: HomeNavigationCardsConfiguration,
    },
  ]
})
export class Home {

}
