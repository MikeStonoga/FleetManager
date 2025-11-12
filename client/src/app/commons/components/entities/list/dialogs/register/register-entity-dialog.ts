import { AfterViewInit, Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEntityConfiguration } from '@commons/components/entities/entities.configuration';
import { SaveIcon } from '@commons/icons/icons';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIcon } from "@sdk/icon/sdk-icon";

@Component({
  selector: 'app-register-entity-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
    SdkButton
],
  templateUrl: './register-entity-dialog.html',
  styleUrl: './register-entity-dialog.scss',
  providers: [
    SaveIcon,
  ]
})
export class RegisterEntityDialog 
implements AfterViewInit {
  private readonly data: { configuration: IEntityConfiguration } = inject(MAT_DIALOG_DATA); 
  private get configuration() {
    return this.data.configuration;
  }
  
  @ViewChild('dynamicFormContainer', { read: ViewContainerRef })
  private container!: ViewContainerRef;
  
  private readonly translationService = inject(TranslationService);
  public readonly nameLabel = this.translationService.translation.commons.properties.name;
  public readonly entityLabel = this.configuration.nameSingular + ' - ' + this.translationService.translation.commons.register;
  private readonly matDialogRef = inject(MatDialogRef);
  private readonly snackBar = inject(MatSnackBar);
  
  public readonly form = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
  });

  ngAfterViewInit(): void {
    const formDef = this.configuration.forms.register;
    const ref = this.container.createComponent(formDef.template);
    const form = formDef.createForm();

    (ref.instance as any).form = form;
    (ref.instance as any).entityIcon = this.entityIcon;

    this.formInstance = ref.instance;
  }
  formInstance: any;

  public get entityIcon() {
    return this.configuration.icon;
  }


  private get service() {
    return this.configuration.service;
  }

  public readonly saveButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.save,
    icon: inject(SaveIcon),
    isDisabled: () => !(this.formInstance?.form.dirty && this.formInstance?.form.valid),
    onClick: () => {
      const formValue = this.formInstance?.form.getRawValue();
      const requirement =  this.configuration.forms.register.toRequirement(formValue);
      
      this.service
        .register(requirement)
        .subscribe(response => {
          this.service.listRefreshRequested.next();
          
          this.snackBar.open(this.translationService.translation.commons.registered, 'Ok', { duration: 3000 });

          this.matDialogRef.close(response);
        })
    }
  });
}
