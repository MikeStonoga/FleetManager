import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkIcon } from './sdk-icon';

describe('SdkIcon', () => {
  let component: SdkIcon;
  let fixture: ComponentFixture<SdkIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdkIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
