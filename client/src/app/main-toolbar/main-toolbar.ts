import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltip } from "@angular/material/tooltip";
import { Router } from '@angular/router';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "../../sdk/button/sdk-button";
import { SdkIcon, SdkIconConfiguration } from '../../sdk/icon/sdk-icon';
import { SdkToolbar } from '../../sdk/toolbar/sdk-toolbar';
import { VolvoColors } from '../commons/colors';
import { GoHomeButtonConfiguration } from './buttons/go-home.button-configuration';
import { IMenu, Menus } from './menus';

@Component({
  selector: 'main-toolbar',
  imports: [
    SdkToolbar,
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
    GoHomeButtonConfiguration
  ]
})
export class MainToolbar {
  private drawer = viewChild.required<MatDrawer>('drawer');

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

  public toolbarConfiguration = {
    backgroundColor: VolvoColors.DarkBlue
  };
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
    private readonly translationService: TranslationService
  ) {

  }

}
