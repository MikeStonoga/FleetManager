import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VolvoColors } from '@commons/colors';
import { Subject } from 'rxjs';
import { ISdkIconConfiguration, SdkIcon } from "../icon/sdk-icon";

export interface ISdkButtonConfiguration {
  label: string;
  icon: ISdkIconConfiguration;
  onClick: ($event?: MouseEvent) => void;
  isDisabled: () => boolean;
  isToHide: () => boolean;
}

export interface ISdkButtonConfigurationRequirement {
  label: string;
  icon: ISdkIconConfiguration;
  onClick: ($event?: MouseEvent) => void;
  isDisabled?: () => boolean;
  isToHide?: () => boolean;
}

export class SdkButtonConfiguration 
implements ISdkButtonConfiguration {
  public readonly label: string;
  public readonly icon: ISdkIconConfiguration;
  public readonly onClick: ($event?: MouseEvent) => void;
  public readonly isDisabled: () => boolean;
  public readonly isToHide: () => boolean;
  public readonly clicked = new Subject<MouseEvent>();

  public readonly volvoGreyOne = VolvoColors.GreyOne;

  constructor(requirement: ISdkButtonConfigurationRequirement) {
    this.label = requirement.label;
    this.icon = requirement.icon;
    this.onClick = requirement.onClick;
    this.isDisabled = requirement.isDisabled ?? (() => false);
    this.isToHide = requirement.isToHide ?? (() => false);
  }
}

@Component({
  selector: 'sdk-button',
  imports: [
    CommonModule,
    SdkIcon,
    MatButtonModule,
    MatTooltipModule,
],
  templateUrl: './sdk-button.html',
  styleUrl: './sdk-button.scss',
})
export class SdkButton {

  public configuration = input.required<ISdkButtonConfiguration>();
    
  public readonly volvoGreyOne = VolvoColors.GreyOne;

  public get iconConfig() {
    const cfg = this.configuration();
    const color = cfg.isDisabled()
      ? this.volvoGreyOne
      : cfg.icon.color;

    // Retorna um novo objeto compatível com ISdkIconConfiguration
    return {
      name: cfg.icon.name,
      color,
      changeColor: cfg.icon.changeColor.bind(cfg.icon),
    };
  }

  
  public onClick($event: MouseEvent) {
    const configuration = this.configuration();
    if (configuration.isDisabled())
      return;

    configuration.onClick($event);
  }
}
