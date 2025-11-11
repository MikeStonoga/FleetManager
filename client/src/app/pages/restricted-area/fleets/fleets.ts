import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FleetView } from '@commons/models/fleets.models';
import { environment } from 'app/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FleetsService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {

  }

  public getAll(): Observable<FleetView[]> {
    return this.httpClient.get<FleetView[]>(`${environment.API_URL}/Fleet/GetAll`);
  }
}

@Component({
  selector: 'app-fleets',
  imports: [
    CommonModule
  ],
  templateUrl: './fleets.html',
  styleUrl: './fleets.scss',
})
export class Fleets {
  private readonly service = inject(FleetsService);

  public fleets = toSignal(
    this.service.getAll(),
    { initialValue: [] }
  );
  
  constructor() {
    
  }

}
