import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntitiesService } from '@commons/components/entities/entities.service';
import { VehicleTypeView } from '@commons/models/vehicle-types.models';

@Injectable({
  providedIn: 'root'
})
export class VehiclesTypesService 
extends EntitiesService<VehicleTypeView> {

  constructor(
    httpClient: HttpClient,
  ) {
    super('VehicleType', httpClient);
  }

}