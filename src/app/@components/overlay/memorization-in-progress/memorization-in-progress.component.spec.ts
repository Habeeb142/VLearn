import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorizationInProgressComponent } from './memorization-in-progress.component';

describe('MemorizationInProgressComponent', () => {
  let component: MemorizationInProgressComponent;
  let fixture: ComponentFixture<MemorizationInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorizationInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorizationInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
