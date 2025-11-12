import { Component, inject, Input } from '@angular/core';
import { IEntityListCardTemplate } from "@commons/components/entities/entities.configuration";
import { VehicleView } from '@commons/models/vehicles.models';
import { TranslationService } from '@commons/translations/translation.service';

@Component({
  selector: 'app-vehicle-card-template',
  imports: [],
  templateUrl: './vehicle-card-template.html',
  styleUrl: './vehicle-card-template.scss',
})
export class VehicleCardTemplate 
implements IEntityListCardTemplate {
  @Input() entity!: VehicleView;

  public readonly translation = inject(TranslationService).translation.vehicles
}
