import { inject, Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EntityConfiguration } from "@commons/components/entities/entities.configuration";
import { RegisterVehicleRequirement, UpdateVehicleRequirement, VehicleIcon, VehicleView } from "@commons/models/vehicles.models";
import { TranslationService } from "@commons/translations/translation.service";
import { VehicleEditTemplate } from "./forms/edit/vehicle-edit-template";
import { VehicleRegisterTemplate } from "./forms/register/vehicle-register-template";
import { VehicleCardTemplate } from "./list/vehicle-card-template/vehicle-card-template";
import { VehiclesService } from "./vehicles.service";

@Injectable({
    providedIn: 'root'
})
export class VehiclesConfiguration 
extends EntityConfiguration {
    
    constructor(
        translationService: TranslationService
    ) {
        super({
            service: inject(VehiclesService),
            icon: inject(VehicleIcon),
            namePlural: translationService.translation.vehicles.title,
            nameSingular: translationService.translation.vehicles.vehicle,
            list: {
                cards: {
                    contentTemplate: VehicleCardTemplate,
                }
            },
            forms: {
                register: {
                    template: VehicleRegisterTemplate,
                    createForm: () => {
                        return  new FormGroup({
                            fleetId: new FormControl<string | null>(null, Validators.required),
                            typeId: new FormControl<string | null>(null, Validators.required),
                            chassisNumber: new FormControl<number | null>(null, Validators.required),
                            chassisSeries: new FormControl<string | null>(null, Validators.required),
                            color: new FormControl<string | null>(null, Validators.required),
                        })
                    },
                    toRequirement: (formValue) => {
                        return <RegisterVehicleRequirement>{
                            fleetId: formValue.fleetId,
                            typeId: formValue.typeId,
                            chassisNumber: formValue.chassisNumber,
                            chassisSeries: formValue.chassisSeries,
                            color: formValue.color,
                        }
                    }
                }, 
                update: {
                    template: VehicleEditTemplate,
                    createForm: (entity: VehicleView) => {
                        return  new FormGroup({
                            id: new FormControl<string | null>({ value: entity.id, disabled: false }, Validators.required),
                            color: new FormControl<string | null>({ value: entity.color, disabled: false }, Validators.required),
                        });
                    },
                    toRequirement: (formValue) => {
                        return <UpdateVehicleRequirement>{
                            id: formValue.id!,
                            color: formValue.color!,
                        };
                    }
                }
            }
        })
    }
}