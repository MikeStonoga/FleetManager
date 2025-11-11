import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetsList } from './fleets-list';

describe('FleetsList', () => {
  let component: FleetsList;
  let fixture: ComponentFixture<FleetsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
