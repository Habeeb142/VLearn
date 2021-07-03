import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyAndPasteTextsComponent } from './copy-and-paste-texts.component';

describe('CopyAndPasteTextsComponent', () => {
  let component: CopyAndPasteTextsComponent;
  let fixture: ComponentFixture<CopyAndPasteTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyAndPasteTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyAndPasteTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
