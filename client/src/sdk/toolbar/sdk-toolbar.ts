import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ISdkButtonConfiguration, SdkButton } from '@sdk/button/sdk-button';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';
import { VolvoColors } from '../../app/commons/colors';

export interface ISdkToolbarConfiguration {
  label: string;
  icon: ISdkIconConfiguration;
  endButtons: ISdkButtonConfiguration[];
  backgroundColor?: VolvoColors;
}

@Component({
  selector: 'sdk-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule, 
    SdkIcon,
    SdkButton,
  ],
  templateUrl: './sdk-toolbar.html',
  styleUrl: './sdk-toolbar.scss',
})
export class SdkToolbar {
  public configuration = input.required<ISdkToolbarConfiguration>();

  public readonly volvoGrey = VolvoColors.GreyOne;
}
