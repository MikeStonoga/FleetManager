import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetDetails } from './fleet-details';

describe('FleetDetails', () => {
  let component: FleetDetails;
  let fixture: ComponentFixture<FleetDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
