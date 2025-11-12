import { Component, inject, Input } from '@angular/core';
import { VehicleTypeView } from '@commons/models/vehicle-types.models';
import { TranslationService } from '@commons/translations/translation.service';

@Component({
  selector: 'app-vehicle-type-card-template',
  imports: [],
  templateUrl: './vehicle-type-card-template.html',
  styleUrl: './vehicle-type-card-template.scss',
})
export class VehicleTypeCardTemplate {
  @Input() entity!: VehicleTypeView;

  public vehiclesCountLabel = inject(TranslationService).translation.commons.vehiclesCount;
  public numberOfPassengersLabel = inject(TranslationService).translation.vehicles.numberOfPassengers;
}
