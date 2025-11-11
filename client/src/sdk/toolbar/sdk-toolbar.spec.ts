import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkToolbar } from './sdk-toolbar';

describe('SdkToolbar', () => {
  let component: SdkToolbar;
  let fixture: ComponentFixture<SdkToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdkToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
