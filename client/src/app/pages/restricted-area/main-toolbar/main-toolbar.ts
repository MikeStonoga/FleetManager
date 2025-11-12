import { CommonModule } from '@angular/common';
import { Component, computed, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from "@angular/material/tooltip";
import { Router } from '@angular/router';
import { HomeIcon } from '@commons/icons/icons';
import { FleetIcon } from '@commons/models/fleets.models';
import { VehicleTypeIcon } from '@commons/models/vehicle-types.models';
import { VehicleIcon } from '@commons/models/vehicles.models';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "../../../../sdk/button/sdk-button";
import { SdkIcon, SdkIconConfiguration } from '../../../../sdk/icon/sdk-icon';
import { VolvoColors } from '../../../commons/colors';
import { GoHomeButtonConfiguration } from './buttons/go-home.button-configuration';
import { LogoutButton } from './buttons/logout.button-configuration';
import { IMenu, Menus } from './menus';

@Component({
  selector: 'main-toolbar',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    SdkButton,
    CommonModule,
    SdkIcon,
    MatTooltip
],
  templateUrl: './main-toolbar.html',
  styleUrl: './main-toolbar.scss',
  providers: [
    GoHomeButtonConfiguration,
    Menus,
    HomeIcon,
    FleetIcon,
    VehicleIcon,
    VehicleTypeIcon,
  ]
})
export class MainToolbar {
  private drawer = viewChild.required<MatDrawer>('drawer');
  public readonly volvoDarkBlue = VolvoColors.DarkBlue;
  private readonly translationService = inject(TranslationService);
  
  public readonly logoutButtonConfiguration = inject(LogoutButton);

  onMenuSelected(menu: IMenu) {
    this.router.navigateByUrl(menu.route);
    this.drawer().close();
  }

  public readonly menuButtonConfiguration = computed(() => new SdkButtonConfiguration({
      label: 'Abrir Menu',
      icon: new SdkIconConfiguration({
        name: 'menu',
        color: VolvoColors.White,
      }),
      onClick: ($event) => {
        this.drawer().toggle();
      }
    })
  );

  public get goToTooltip(): string {
    return this.translationService
      .translation
      .mainToolbar
      .menus
      .goTo;
  }
  
  constructor(
    public readonly goHomeButtonConfiguration: GoHomeButtonConfiguration,
    public readonly menus: Menus,
    private readonly router: Router,
  ) {

  }

}
