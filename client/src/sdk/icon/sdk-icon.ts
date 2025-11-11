import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { VolvoColors } from '../../app/commons/colors';

export interface ISdkIconConfiguration {
  name: string;
  color: VolvoColors;
}

export interface ISdkIconConfigurationRequirement {
  name: string;
  color?: VolvoColors;
}

export class SdkIconConfiguration 
implements ISdkIconConfiguration {
  public readonly name: string;
  public get color(): VolvoColors {
    return this._color;
  }

  private  _color: VolvoColors;

  constructor(requirement: ISdkIconConfigurationRequirement) {
    this.name = requirement.name;
    this._color = requirement.color ?? VolvoColors.Black;
  }

  changeColor(newColor: VolvoColors) {
    this._color = newColor;
  }
}

@Component({
  selector: 'sdk-icon',
  imports: [CommonModule],
  templateUrl: './sdk-icon.html',
  styleUrl: './sdk-icon.scss',
})
export class SdkIcon {
  public configuration = input.required<ISdkIconConfiguration>();
}
