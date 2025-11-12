import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditTemplate } from './vehicle-edit-template';

describe('VehicleEditTemplate', () => {
  let component: VehicleEditTemplate;
  let fixture: ComponentFixture<VehicleEditTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleEditTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleEditTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
