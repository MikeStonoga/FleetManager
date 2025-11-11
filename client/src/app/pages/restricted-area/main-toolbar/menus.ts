import { Injectable } from "@angular/core";
import { VolvoColors } from "@commons/colors";
import { HomeIcon } from "@commons/icons/icons";
import { FleetIcon } from "@commons/models/fleets.models";
import { VehicleTypeIcon } from "@commons/models/vehicle-types.models";
import { VehicleIcon } from "@commons/models/vehicles.models";
import { TranslationService } from "@commons/translations/translation.service";
import { ISdkIconConfiguration } from "../../../../sdk/icon/sdk-icon";

export interface IMenu {
    label: string;
    icon: ISdkIconConfiguration;
    route: string;
}

@Injectable()
export class Menus 
extends Array<IMenu> {
    constructor(
        private readonly translationService: TranslationService,
        private readonly homeIcon: HomeIcon,
        private readonly fleetIcon: FleetIcon,
        private readonly vehicleIcon: VehicleIcon,
        private readonly vehicleTypeIcon: VehicleTypeIcon,
    ) {
        super();

        // TODO: Implement open closed!
        this.homeIcon.changeColor(VolvoColors.White);
        this.fleetIcon.changeColor(VolvoColors.White);
        this.vehicleIcon.changeColor(VolvoColors.White);
        this.vehicleTypeIcon.changeColor(VolvoColors.White);

        this.addHomeButton();
        this.addFleetButton();
        this.addVehicleButton();
        this.addVehicleTypesButton();
    }

    private addHomeButton() {
        this.push({
            label: this.translationService.translation.mainToolbar.menus.home,
            icon: this.homeIcon,
            route: '/restricted-area/home',
        })
    }

    private addFleetButton() {
        this.push({
            label: this.translationService.translation.fleets.title,
            icon: this.fleetIcon,
            route: '/restricted-area/fleets',
        })
    }

    private addVehicleButton() {
        this.push({
            label: this.translationService.translation.vehicles.title,
            icon: this.vehicleIcon,
            route: '/restricted-area/vehicles',
        })
    }

    private addVehicleTypesButton() {
        this.push({
            label: this.translationService.translation.vehicleTypes.title,
            icon: this.vehicleTypeIcon,
            route: '/restricted-area/vehicles-types',
        })
    }
}