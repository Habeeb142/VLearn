import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-upload-response',
  templateUrl: './upload-response.component.html',
  styleUrls: ['./upload-response.component.css']
})
export class UploadResponseComponent implements OnInit {

  constructor(
    private rout: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }

  viewQuestions() {
    this.bottomSheet.dismiss()
    this.rout.navigate(['view-questions'])
  }

  goBack() {
    this.bottomSheet.dismiss()
    this.rout.navigate(['question-and-answer'])
  }

}
