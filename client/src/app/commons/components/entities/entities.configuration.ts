import { ComponentType } from "@angular/cdk/overlay";
import { InjectionToken } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { EntityView } from "@commons/models/entity.models";
import { ISdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { EntitiesService } from "./entities.service";

export const ENTITY_CONFIGURATION = new InjectionToken<IEntityConfiguration>('entity.configuration');

export interface IEntityFormsConfiguration {
    register: {
        template: ComponentType<IEntityFormTemplate>;
        createForm(): FormGroup<any>;
        toRequirement: (formValue: any) => any
    };
    update: {
        template: ComponentType<IEntityFormTemplate>;
        createForm (entity: any): FormGroup<any>;
        toRequirement: (formValue: any) => any
    };
}

export interface IEntityFormTemplate {
  form: FormGroup;
  entityIcon: ISdkIconConfiguration;
  entity?: any; // usado apenas no edit
}

export interface IEntityListsConfiguration {
  cards: {
    contentTemplate: ComponentType<IEntityListCardTemplate>;
  };
    
}

export interface IEntityListCardTemplate {
    entity: any;
}

export interface IEntityConfiguration {
    entityRoute: string;
    details: IEntityDetailsConfiguration;
    service: EntitiesService<EntityView>;
    icon: ISdkIconConfiguration;
    namePlural: string;
    nameSingular: string;
    list: IEntityListsConfiguration;
    forms: IEntityFormsConfiguration
}

export interface IEntityDetailsConfiguration{
    toolbarComplement: (entity: any) => string;
};

export interface IEntityConfigurationRequirement {
    service: EntitiesService<EntityView>;
    icon: ISdkIconConfiguration;
    namePlural: string;
    nameSingular: string;
    entityRoute: string;
    forms: IEntityFormsConfiguration;
    list: IEntityListsConfiguration;
    details: IEntityDetailsConfiguration;
}

export abstract class EntityConfiguration 
implements IEntityConfiguration {

    public readonly service: EntitiesService<EntityView>;
    public readonly icon: ISdkIconConfiguration;
    public readonly namePlural: string;
    public readonly nameSingular: string;
    public readonly entityRoute: string;
    public readonly forms: IEntityFormsConfiguration;
    public readonly list: IEntityListsConfiguration;
    public readonly details: IEntityDetailsConfiguration;

    constructor(requirement: IEntityConfigurationRequirement) {
        this.service = requirement.service;
        this.icon = requirement.icon;
        this.namePlural = requirement.namePlural;
        this.nameSingular = requirement.nameSingular;
        this.forms = requirement.forms;
        this.list = requirement.list;
        this.details = requirement.details;
        this.entityRoute = requirement.entityRoute;
    }
}