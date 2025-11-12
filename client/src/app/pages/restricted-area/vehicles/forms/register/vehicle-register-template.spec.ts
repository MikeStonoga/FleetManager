import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRegisterTemplate } from './vehicle-register-template';

describe('VehicleRegisterTemplate', () => {
  let component: VehicleRegisterTemplate;
  let fixture: ComponentFixture<VehicleRegisterTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleRegisterTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRegisterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
