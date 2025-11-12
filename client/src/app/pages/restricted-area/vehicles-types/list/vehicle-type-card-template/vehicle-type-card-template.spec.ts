import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeCardTemplate } from './vehicle-type-card-template';

describe('VehicleTypeCardTemplate', () => {
  let component: VehicleTypeCardTemplate;
  let fixture: ComponentFixture<VehicleTypeCardTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleTypeCardTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTypeCardTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
