import { Component, inject, Input } from "@angular/core";
import { IEntityListCardTemplate } from "@commons/components/entities/entities.configuration";
import { FleetView } from "@commons/models/fleets.models";
import { TranslationService } from "@commons/translations/translation.service";

@Component({
  selector: 'app-fleet-card-template',
  imports: [
],
  templateUrl: './fleet.card-template.html',
  styleUrl: './fleet.card-template.scss',
})
export class FleetCardTemplate 
implements IEntityListCardTemplate {
  @Input() entity!: FleetView;

  public vehiclesCountLabel = inject(TranslationService).translation.commons.vehiclesCount;

}