import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntitiesService } from '@commons/components/entities/entities.service';
import { FleetView } from '@commons/models/fleets.models';

@Injectable({
  providedIn: 'root'
})
export class FleetsService 
extends EntitiesService<FleetView> {

  constructor(
    httpClient: HttpClient,
  ) {
    super('Fleet', httpClient);
  }

}