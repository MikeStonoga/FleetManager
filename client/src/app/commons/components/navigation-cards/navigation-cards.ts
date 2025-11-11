import { Component, inject, InjectionToken } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { VolvoColors } from '@commons/colors';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';

export interface INavigationCardsConfiguration {
  cards: INavigationCard[];
}

export interface INavigationCard {
  label: string;
  icon: ISdkIconConfiguration;
  route: string;
  isToHide: () => boolean
}

export interface INavigationCardRequirement {
  label: string;
  icon: ISdkIconConfiguration;
  route: string;
  isToHide?: () => boolean
}

export class NavigationCard 
implements INavigationCard {
  label: string;
  icon: ISdkIconConfiguration;
  route: string;
  isToHide: () => boolean;

  constructor(requirement: INavigationCardRequirement) {
    this.label = requirement.label;
    this.icon = requirement.icon;
    this.icon.changeColor(VolvoColors.White);
    this.route = requirement.route;
    this.isToHide = requirement.isToHide ?? (() => false);
  }
}

export const NAVIGATION_CARDS_CONFIGURATION = new InjectionToken<INavigationCardsConfiguration>('navigation.cards.configuration');

@Component({
  selector: 'navigation-cards',
  imports: [
    MatCardModule,
    SdkIcon,
  ],
  templateUrl: './navigation-cards.html',
  styleUrl: './navigation-cards.scss',
})
export class NavigationCards {
  private readonly router = inject(Router);
  public readonly configuration = inject(NAVIGATION_CARDS_CONFIGURATION);

  navigate(route: string) {
    this.router.navigate([`/restricted-area/${route}`]);
  }
}
