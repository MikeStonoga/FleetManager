import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetEditTemplate } from './fleet-edit-template';

describe('FleetEditTemplate', () => {
  let component: FleetEditTemplate;
  let fixture: ComponentFixture<FleetEditTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetEditTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetEditTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
