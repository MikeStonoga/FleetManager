import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesList } from './entities-list';

describe('EntitiesList', () => {
  let component: EntitiesList;
  let fixture: ComponentFixture<EntitiesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitiesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
