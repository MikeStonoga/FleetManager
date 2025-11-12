import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntitiesService } from '@commons/components/entities/entities.service';
import { VehicleView } from '@commons/models/vehicles.models';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService 
extends EntitiesService<VehicleView> {

  constructor(
    httpClient: HttpClient,
  ) {
    super('Vehicle', httpClient);
  }

}