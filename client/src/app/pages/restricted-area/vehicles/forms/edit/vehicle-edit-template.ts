import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEntityFormTemplate } from '@commons/components/entities/entities.configuration';
import { FleetView } from '@commons/models/fleets.models';
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';

@Component({
  selector: 'app-vehicle-edit-template',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,

  ],
  templateUrl: './vehicle-edit-template.html',
  styleUrl: './vehicle-edit-template.scss',
})
export class VehicleEditTemplate  implements IEntityFormTemplate {
  @Input() form!: FormGroup;
  @Input() entityIcon!: ISdkIconConfiguration;
  @Input() entity?: FleetView;
  
  private readonly translationService = inject(TranslationService);
  public readonly colorLabel = this.translationService.translation.vehicles.color;
}