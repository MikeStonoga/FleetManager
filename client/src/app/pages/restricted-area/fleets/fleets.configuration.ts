import { inject, Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EntityConfiguration } from "@commons/components/entities/entities.configuration";
import { FleetIcon, FleetView, RegisterFleetRequirement, UpdateFleetRequirement } from "@commons/models/fleets.models";
import { TranslationService } from "@commons/translations/translation.service";
import { FleetsService } from "./fleets.service";
import { FleetEditTemplate } from "./forms/edit/fleet-edit-template";
import { FleetRegisterTemplate } from "./forms/register/fleet-register-template";
import { FleetCardTemplate } from "./list/fleet.card-template";

@Injectable({
    providedIn: 'root'
})
export class FleetsConfiguration 
extends EntityConfiguration {
    
    constructor(
        translationService: TranslationService,
    ) {
        super({
            service: inject(FleetsService),
            icon: inject(FleetIcon),
            namePlural: translationService.translation.fleets.title,
            nameSingular: translationService.translation.fleets.fleet,
            list: {
                cards: {
                    contentTemplate: FleetCardTemplate, 
                }
            },
            forms: {
                register: {
                    template: FleetRegisterTemplate,
                    createForm: () => {
                        return  new FormGroup({
                            name: new FormControl<string | null>(null, Validators.required),
                        })
                    },
                    toRequirement: (formValue) => {
                        return <RegisterFleetRequirement>{
                            name: formValue.name!,
                        }
                    }
                }, 
                update: {
                    template: FleetEditTemplate,
                    createForm: (entity: FleetView) => {
                        return  new FormGroup({
                            id: new FormControl<string | null>({ value: entity.id, disabled: false }, Validators.required),
                            name: new FormControl<string | null>({ value: entity.name, disabled: false }, Validators.required),
                        });
                    },
                    toRequirement: (formValue) => {
                        return <UpdateFleetRequirement>{
                            id: formValue.id!,
                            name: formValue.name!,
                        };
                    }
                }
            }
        })
    }
}