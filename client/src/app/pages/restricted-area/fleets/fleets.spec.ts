import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fleets } from './fleets';

describe('Fleets', () => {
  let component: Fleets;
  let fixture: ComponentFixture<Fleets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fleets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fleets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
