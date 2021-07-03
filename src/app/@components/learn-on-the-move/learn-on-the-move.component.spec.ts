import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOnTheMoveComponent } from './learn-on-the-move.component';

describe('LearnOnTheMoveComponent', () => {
  let component: LearnOnTheMoveComponent;
  let fixture: ComponentFixture<LearnOnTheMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnOnTheMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOnTheMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
