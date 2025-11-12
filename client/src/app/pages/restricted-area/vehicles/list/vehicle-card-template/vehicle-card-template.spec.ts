import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardTemplate } from './vehicle-card-template';

describe('VehicleCardTemplate', () => {
  let component: VehicleCardTemplate;
  let fixture: ComponentFixture<VehicleCardTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCardTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCardTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
