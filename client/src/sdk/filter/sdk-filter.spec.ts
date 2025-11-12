import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkFilter } from './sdk-filter';

describe('SdkFilter', () => {
  let component: SdkFilter;
  let fixture: ComponentFixture<SdkFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdkFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
