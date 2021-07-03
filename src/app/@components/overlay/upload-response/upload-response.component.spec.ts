import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResponseComponent } from './upload-response.component';

describe('UploadResponseComponent', () => {
  let component: UploadResponseComponent;
  let fixture: ComponentFixture<UploadResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
