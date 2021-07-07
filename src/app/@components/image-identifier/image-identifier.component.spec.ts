import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageIdentifierComponent } from './image-identifier.component';

describe('ImageIdentifierComponent', () => {
  let component: ImageIdentifierComponent;
  let fixture: ComponentFixture<ImageIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageIdentifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
