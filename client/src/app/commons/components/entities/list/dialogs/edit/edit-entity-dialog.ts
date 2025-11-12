import { AfterViewInit, Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEntityConfiguration } from '@commons/components/entities/entities.configuration';
import { SaveIcon } from '@commons/icons/icons';
import { EntityView } from '@commons/models/entity.models';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkButton, SdkButtonConfiguration } from "@sdk/button/sdk-button";
import { SdkIcon } from "@sdk/icon/sdk-icon";

@Component({
  selector: 'app-edit-entity-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SdkIcon,
    SdkButton
],
  templateUrl: './edit-entity-dialog.html',
  styleUrl: './edit-entity-dialog.scss',
  providers: [
    SaveIcon,
  ]
})
export class EditEntityDialog<TEntityView extends EntityView> 
implements AfterViewInit {

  private get configuration() {
    return this.data.configuration;
  }

  public readonly data: { configuration: IEntityConfiguration, entity: TEntityView } = inject(MAT_DIALOG_DATA);
  
  public get entity() {
    return this.data.entity;
  }
  
  public get entityIcon() {
    return this.configuration.icon;
  }
  public get entityLabelSingular() {
    return this.configuration.nameSingular;
  }

  @ViewChild('dynamicFormContainer', { read: ViewContainerRef })
  private container!: ViewContainerRef;

  private formInstance: any;


  private readonly translationService = inject(TranslationService);
  private readonly matDialogRef = inject(MatDialogRef);
  private readonly snackBar = inject(MatSnackBar);

  public readonly form = this.configuration.forms.update.createForm(this.entity);

  private get service() {
    return this.configuration.service;
  }

  
  ngAfterViewInit(): void {
    const formDef = this.configuration.forms.update;
    const ref = this.container.createComponent(formDef.template);
    const form = formDef.createForm(this.entity);

    (ref.instance as any).form = form;
    (ref.instance as any).entity = this.entity;
    (ref.instance as any).entityIcon = this.entityIcon;

    this.formInstance = ref.instance;
  }

  public readonly saveButton = new SdkButtonConfiguration({
    label: this.translationService.translation.commons.save,
    icon: inject(SaveIcon),
    isDisabled: () => !(this.formInstance?.form.dirty && this.formInstance?.form.valid),
    onClick: () => {
      const formValue = this.formInstance?.form.getRawValue();
      const requirement = this.configuration.forms.update.toRequirement(formValue);
      
      this.service
        .update(requirement)
        .subscribe(response => {
          this.service.listRefreshRequested.next();
          
          this.snackBar.open(this.translationService.translation.commons.edited, 'Ok', { duration: 3000 });

          this.matDialogRef.close(response);
        })
    }
  });


}
