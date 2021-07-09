import { ErrorResponseComponent } from '../ ../../overlay/error-response/error-response.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ServiceService } from './../../@core/service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UploadResponseComponent } from '../overlay/upload-response/upload-response.component';

@Component({
  selector: 'app-copy-and-paste-texts',
  templateUrl: './copy-and-paste-texts.component.html',
  styleUrls: ['./copy-and-paste-texts.component.css']
})
export class CopyAndPasteTextsComponent implements OnInit {

  constructor(
    private rout: Router,
    private babyLoader: NgxUiLoaderService,
    private server: ServiceService,
    private bottomSheet: MatBottomSheet
    ) { }

  comingFrom
  text: string = ''

  ngOnInit(): void {
    this.comingFrom = this.server.comingFrom
  }

  // Back function Hnadler: Check which page you are coming from in other to know where to rout to
  back() {
    this.comingFrom == '/question-and-answer'?
    this.rout.navigate(['question-and-answer']) :
    this.rout.navigate(['fill-the-gaps'])
  }
  // Home function handler
  home() {
    this.rout.navigate([''])
  }
  // Main action Function
  extract() {
    // Check if text character is greater than 99 before proceed
    if(this.text.length >= 100) {
      // Remove all quotations
      this.text = this.text.replace(/["']/g, "")
      // loader
      this.babyLoader.start();
      // Send text to service in other handle AI analysis

      this.server.submitExtractedTextAndGetQuestions(this.text)
      .subscribe((dat: any)=>{
        // Result from AI
        this.server.submitResult(JSON.stringify(dat['output']['questions']), this.text)
        .subscribe((dat: any)=>{
          this.babyLoader.stop()
          // Success Report
          if(dat.isSuccess) {
            this.bottomSheet.open(UploadResponseComponent)
          }
          // Error Response
          else {
            this.babyLoader.stop()
            this.bottomSheet.open(ErrorResponseComponent)
          }
        }, err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
      }, 
      err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
    }
    // Response when text is less than 100
    else {
      alert('Text must be minimum of 100 characters')
    }
  }
  // SendData function sanitizes the extracted data and sends to the tab of fil in the gaps 
  sendData() {
    const refactured_data = this.text.replace(",", " ").replace(".", " ").replace("-", " ").replace(":", " ").split(" ")
    const data_array  = refactured_data.filter(dat=>dat.length > 5)
    this.server.keepPasteText = data_array;
    this.rout.navigate(['fill'])
  }

}
