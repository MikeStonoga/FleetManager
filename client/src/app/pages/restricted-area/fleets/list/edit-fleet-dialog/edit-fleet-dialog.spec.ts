import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFleetDialog } from './edit-fleet-dialog';

describe('EditFleetDialog', () => {
  let component: EditFleetDialog;
  let fixture: ComponentFixture<EditFleetDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFleetDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFleetDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
