import { inject, Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EntityConfiguration } from "@commons/components/entities/entities.configuration";
import { RegisterVehicleTypeRequirement, UpdateVehicleTypeRequirement, VehicleTypeIcon, VehicleTypeView } from "@commons/models/vehicle-types.models";
import { TranslationService } from "@commons/translations/translation.service";
import { VehicleTypeEditTemplate } from "./forms/edit/vehicle-type-edit-template";
import { VehicleTypeRegisterTemplate } from "./forms/register/vehicle-type-register-template";
import { VehicleTypeCardTemplate } from "./list/vehicle-type-card-template/vehicle-type-card-template";
import { VehiclesTypesService } from "./vehicles-types.service";

@Injectable({
    providedIn: 'root'
})
export class VehiclesTypesConfiguration 
extends EntityConfiguration {
    
    constructor(
        translationService: TranslationService
    ) {
        super({
            service: inject(VehiclesTypesService),
            icon: inject(VehicleTypeIcon),
            namePlural: translationService.translation.vehicleTypes.title,
            nameSingular: translationService.translation.vehicleTypes.vehicleType,
            entityRoute: 'vehicles-types',
            list: {
                cards: {
                    contentTemplate: VehicleTypeCardTemplate,
                }
            },
            forms: {
                register: {
                    template: VehicleTypeRegisterTemplate,
                    createForm: () => {
                        return  new FormGroup({
                            name: new FormControl<string | null>({ value: null, disabled: false }, Validators.required),
                            numberOfPassengers: new FormControl<number | null>({ value: null, disabled: false }, Validators.required),
                        });
                    },
                    toRequirement: (formValue) => {
                        return <RegisterVehicleTypeRequirement>{
                            name: formValue.name,
                            numberOfPassengers: formValue.numberOfPassengers,
                        }
                    }
                }, 
                update: {
                    template: VehicleTypeEditTemplate,
                    createForm: (entity: VehicleTypeView) => {
                        return  new FormGroup({
                            id: new FormControl<string | null>({ value: entity.id, disabled: false }, Validators.required),
                            name: new FormControl<string | null>({ value: entity.name, disabled: false }, Validators.required),
                            numberOfPassengers: new FormControl<number | null>({ value: entity.numberOfPassengers, disabled: false }, Validators.required),
                        });
                    },
                    toRequirement: (formValue) => {
                        return <UpdateVehicleTypeRequirement>{
                            id: formValue.id!,
                            name: formValue.name!,
                            numberOfPassengers: formValue.numberOfPassengers!,
                        };
                    }
                },
            },
            details: {
                toolbarComplement: (entity: VehicleTypeView) => `${entity.code} - ${entity.name}`,
            },
        })
    }
}