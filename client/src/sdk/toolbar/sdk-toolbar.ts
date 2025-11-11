import {Component, input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VolvoColors } from '../../app/commons/colors';
import { CommonModule } from '@angular/common';

export interface ISdkToolbarConfiguration {
  backgroundColor: VolvoColors;
}

@Component({
  selector: 'sdk-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule, 
  ],
  templateUrl: './sdk-toolbar.html',
  styleUrl: './sdk-toolbar.scss',
})
export class SdkToolbar {
  public configuration = input.required<ISdkToolbarConfiguration>();
}
