import { Component, inject } from '@angular/core';
import { ISdkToolbarConfiguration, SdkToolbar } from "@sdk/toolbar/sdk-toolbar";
import { ENTITY_CONFIGURATION } from '../entities.configuration';
import { GoBackToEntityListButton } from './buttons/go-back-to-entity-list.button-configuration';

@Component({
  selector: 'app-entity-details',
  imports: [SdkToolbar],
  templateUrl: './entity-details.html',
  styleUrl: './entity-details.scss',
  providers: [
    GoBackToEntityListButton
  ],
})
export class EntityDetails {
  public readonly configuration = inject(ENTITY_CONFIGURATION);
    
  private get service() {
    return this.configuration.service;
  }

    private get currentSelected() {
      return this.service.currentSelected!;
    }
    
    public readonly toolbarConfiguration: ISdkToolbarConfiguration = {
      label: this.configuration.nameSingular + ' ' + this.configuration.details.toolbarComplement(this.currentSelected),
      icon: this.configuration.icon,
      endButtons: [
        inject(GoBackToEntityListButton)
      ]
    };
}
