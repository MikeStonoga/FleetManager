import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FleetView, RegisterFleetRequirement, UpdateFleetRequirement } from '@commons/models/fleets.models';
import { environment } from 'app/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FleetsService {


  public currentSelected?: FleetView;
  public readonly listRefreshRequested = new Subject<void>();

  constructor(
    private readonly httpClient: HttpClient,
  ) {

  }

  public getAll(): Observable<FleetView[]> {
    return this.httpClient.get<FleetView[]>(`${environment.API_URL}/Fleet/GetAll`);
  }

  
  register(requirement: RegisterFleetRequirement) {
    return this.httpClient.post<FleetView>(`${environment.API_URL}/Fleet/Register`, requirement);
  }

  public update(requirement: UpdateFleetRequirement) {
    return this.httpClient.patch<FleetView>(`${environment.API_URL}/Fleet/Update`, requirement);
  }

  remove(id: string) {
    return this.httpClient.delete(`${environment.API_URL}/Fleet/Remove?id=${id}`);
  }
}

@Component({
  selector: 'app-fleets',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './fleets.html',
  styleUrl: './fleets.scss',
})
export class Fleets {
  
}