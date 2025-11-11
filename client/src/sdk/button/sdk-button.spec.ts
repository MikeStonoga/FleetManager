import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkButton } from './sdk-button';

describe('SdkButton', () => {
  let component: SdkButton;
  let fixture: ComponentFixture<SdkButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdkButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
