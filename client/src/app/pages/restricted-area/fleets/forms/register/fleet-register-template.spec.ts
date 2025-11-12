import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetRegisterTemplate } from './fleet-register-template';

describe('FleetRegisterTemplate', () => {
  let component: FleetRegisterTemplate;
  let fixture: ComponentFixture<FleetRegisterTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetRegisterTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetRegisterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
