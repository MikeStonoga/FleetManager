import { Component, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICONS } from '@commons/icons/icons';
import { FleetIcon } from '@commons/models/fleets.models';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { ISdkToolbarConfiguration, SdkToolbar } from "@sdk/toolbar/sdk-toolbar";
import { FleetsService } from '../fleets';

@Injectable()
export class GoBackToFleetListButton
extends SdkButtonConfiguration {
  constructor(
    translationService: TranslationService,
    router: Router,
    fleetService: FleetsService,
  ) {
    super({
      label: translationService.translation.commons.goBackToList,
      icon: new SdkIconConfiguration({
        name: ICONS.BackToList,
      }),
      onClick: () => {
        fleetService.currentSelected = undefined;
        router.navigateByUrl('/restricted-area/fleets/list');
      }
    });
  }
}

@Component({
  selector: 'app-fleet-details',
  imports: [SdkToolbar],
  templateUrl: './fleet-details.html',
  styleUrl: './fleet-details.scss',
  providers: [
    FleetIcon,
    GoBackToFleetListButton,
  ]
})
export class FleetDetails {
  private readonly fleetService = inject(FleetsService);
  
  private get currentSelected() {
    return this.fleetService.currentSelected!;
  }
  
  public readonly toolbarConfiguration: ISdkToolbarConfiguration = {
    label: inject(TranslationService).translation.fleets.fleet + ' ' + this.currentSelected.code + ' - ' + this.currentSelected.name,
    icon: inject(FleetIcon),
    endButtons: [
      inject(GoBackToFleetListButton)
    ]
  };


}
