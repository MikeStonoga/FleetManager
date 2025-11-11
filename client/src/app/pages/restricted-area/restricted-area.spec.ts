import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedArea } from './restricted-area';

describe('RestrictedArea', () => {
  let component: RestrictedArea;
  let fixture: ComponentFixture<RestrictedArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictedArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
