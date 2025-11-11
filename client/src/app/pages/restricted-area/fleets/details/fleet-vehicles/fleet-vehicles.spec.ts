import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetVehicles } from './fleet-vehicles';

describe('FleetVehicles', () => {
  let component: FleetVehicles;
  let fixture: ComponentFixture<FleetVehicles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetVehicles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetVehicles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
