import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicArea } from './public-area';

describe('PublicArea', () => {
  let component: PublicArea;
  let fixture: ComponentFixture<PublicArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
