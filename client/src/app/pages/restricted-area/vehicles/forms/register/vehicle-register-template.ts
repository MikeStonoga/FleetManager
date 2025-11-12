import { Component, inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IEntityFormTemplate } from '@commons/components/entities/entities.configuration';
import { TranslationService } from '@commons/translations/translation.service';
import { ISdkIconConfiguration, SdkIcon } from '@sdk/icon/sdk-icon';

@Component({
  selector: 'app-vehicle-register-template',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,

  ],
  templateUrl: './vehicle-register-template.html',
  styleUrl: './vehicle-register-template.scss',
})
export class VehicleRegisterTemplate  implements IEntityFormTemplate {
  @Input() form!: FormGroup;
  @Input() entityIcon!: ISdkIconConfiguration;

  private readonly translationService = inject(TranslationService);
  public readonly colorLabel = this.translationService.translation.vehicles.color;
  
}