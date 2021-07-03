import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-response',
  templateUrl: './error-response.component.html',
  styleUrls: ['./error-response.component.css']
})
export class ErrorResponseComponent implements OnInit {

  constructor(private rout: Router, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  retry() {
    this.rout.navigate(['question-and-answer'])
  }

  goBack() {
    this.bottomSheet.dismiss()
  }

}
