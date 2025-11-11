import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFleetDialog } from './register-fleet-dialog';

describe('RegisterFleetDialog', () => {
  let component: RegisterFleetDialog;
  let fixture: ComponentFixture<RegisterFleetDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFleetDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFleetDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
