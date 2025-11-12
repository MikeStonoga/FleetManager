import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeEditTemplate } from './vehicle-type-edit-template';

describe('VehicleTypeEditTemplate', () => {
  let component: VehicleTypeEditTemplate;
  let fixture: ComponentFixture<VehicleTypeEditTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleTypeEditTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTypeEditTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
