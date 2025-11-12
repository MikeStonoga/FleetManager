import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeRegisterTemplate } from './vehicle-type-register-template';

describe('VehicleTypeRegisterTemplate', () => {
  let component: VehicleTypeRegisterTemplate;
  let fixture: ComponentFixture<VehicleTypeRegisterTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleTypeRegisterTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTypeRegisterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
