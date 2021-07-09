import { ServiceService } from './../../../@core/service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-response',
  templateUrl: './error-response.component.html',
  styleUrls: ['./error-response.component.css']
})
export class ErrorResponseComponent implements OnInit {

  constructor(
    private rout: Router, 
    private bottomSheet: MatBottomSheet,
    private server: ServiceService
    ) { }

  ngOnInit(): void {
  }
  // Retry function...Check where you are coming from to know where to navigate to
  retry() {
    this.goBack();
    (this.server.comingFrom == '/question-and-answer' || this.server.comingFrom == '/copy-paste-texts') ?
    this.rout.navigate(['question-and-answer']) :
    this.rout.navigate(['fill-the-gaps']) 

  }
  // Back function
  goBack() {
    this.bottomSheet.dismiss()
  }

}
