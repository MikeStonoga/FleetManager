import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEntityFormTemplate } from '@commons/components/entities/entities.configuration';
import { VehicleTypeView } from '@commons/models/vehicle-types.models';
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';

@Component({
  selector: 'app-vehicle-type-edit-template',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
  ],
  templateUrl: './vehicle-type-edit-template.html',
  styleUrl: './vehicle-type-edit-template.scss',
})
export class VehicleTypeEditTemplate  implements IEntityFormTemplate {
  @Input() form!: FormGroup;
  @Input() entityIcon!: ISdkIconConfiguration;
  @Input() entity?: VehicleTypeView;
  
  private readonly translationService = inject(TranslationService);
  public readonly nameLabel = this.translationService.translation.commons.properties.name;
  public readonly numberOfPassengersLabel = this.translationService.translation.vehicles.numberOfPassengers;
}