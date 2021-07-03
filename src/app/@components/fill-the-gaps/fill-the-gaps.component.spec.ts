import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTheGapsComponent } from './fill-the-gaps.component';

describe('FillTheGapsComponent', () => {
  let component: FillTheGapsComponent;
  let fixture: ComponentFixture<FillTheGapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillTheGapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillTheGapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
