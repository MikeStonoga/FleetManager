import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEntityFormTemplate } from '@commons/components/entities/entities.configuration';
import { EntitySelector } from "@commons/components/entities/selector/entity-selector";
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';
import { FleetsConfiguration } from 'app/pages/restricted-area/fleets/fleets.configuration';
import { VehiclesTypesConfiguration } from 'app/pages/restricted-area/vehicles-types/vehicles-types.configuration';

@Component({
  selector: 'app-vehicle-register-template',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
    EntitySelector
],
  templateUrl: './vehicle-register-template.html',
  styleUrl: './vehicle-register-template.scss',
})
export class VehicleRegisterTemplate  implements IEntityFormTemplate {
  @Input() form!: FormGroup;
  @Input() entityIcon!: ISdkIconConfiguration;

  public readonly fleetConfiguration = inject(FleetsConfiguration);
  public readonly vehicleTypeConfiguration = inject(VehiclesTypesConfiguration);
  private readonly translationService = inject(TranslationService);
  public readonly chassisSeriesLabel = this.translationService.translation.vehicles.chassisSeries;
  public readonly chassisNumberLabel = this.translationService.translation.vehicles.chassisNumber;
  public readonly colorLabel = this.translationService.translation.vehicles.color;
  
}