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

  text: string = ''

  ngOnInit(): void {
  }

  back() {
    this.rout.navigate(['question-and-answer'])
  }
  
  home() {
    this.rout.navigate([''])
  }

  extract() {
    if(this.text.length >= 100) {
      this.babyLoader.start();
      this.server.submitExtractedTextAndGetQuestions(this.text)
      .subscribe((dat: any)=>{console.log(dat)
        this.server.submitResult(JSON.stringify(dat['output']['questions']), this.text)
        .subscribe((dat: any)=>{
          this.babyLoader.stop()
          if(dat.isSuccess) {
            this.bottomSheet.open(UploadResponseComponent)
          }
          else {
            this.babyLoader.stop()
            this.bottomSheet.open(ErrorResponseComponent)
          }
        }, err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
      }, 
      err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
    }
    else {
      alert('Text must be minimum of 100 characters')
    }
  }

}
