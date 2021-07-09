import { ErrorResponseComponent } from '../overlay/error-response/error-response.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ServiceService } from './../../@core/service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UploadResponseComponent } from '../overlay/upload-response/upload-response.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.css']
})
export class QuestionAndAnswerComponent implements OnInit {

  constructor(
    private rout: Router,
    private ocr: OCR,
    private bottomSheet: MatBottomSheet,
    private server: ServiceService,
    private babyLoader: NgxUiLoaderService,
    private camera: Camera
    ) { }

  extractedText = null;
  // Differnet actions
  items = [ 
    { 
      text: 'Capture a page',
      bgColor: '#732CA4',
      boxShadow: '0px 0px 8px rgba(115, 44, 164, 0.8)',
      rout: 'upload'
    },
    { 
      text: 'Paste Copied Texts',
      bgColor: '#F8A220',
      boxShadow: '0px 0px 8px rgba(248, 162, 32, 0.8)',
      rout: 'copy-paste-texts'
    },
    { 
      text: 'View Questions',
      bgColor: '#732CA4',
      boxShadow: '0px 0px 8px rgba(115, 44, 164, 0.8)',
      rout: 'view-questions'
    }
   ]

  //  Onlaod
  ngOnInit(): void {
    this.rout.url == '/question-and-answer' ? null : this.items.pop()
  }
  // Back
  back() {
    this.rout.navigate([''])
  }

  // Rout to differnt tabs
  screenTo(x) {
    switch (x) {
      // if uploading image from camera
      case 'upload':
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.handleExtractTextFromFileUrl(imageData)
         }, (err) => {
          this.bottomSheet.open(ErrorResponseComponent)
          // Handle error
         });
        break;
        
        default:
          this.server.comingFrom = this.rout.url
          this.rout.navigate([x])
        break;
    }
  }
  // Text extractor function
  handleExtractTextFromFileUrl(base64File) {
    try {
      this.ocr.recText(OCRSourceType.BASE64, base64File)
      .then((res: OCRResult) => this.rout.url == '/question-and-answer'? this.cleanData(res.lines.linetext) : this.handleFillTheGapsData(res.lines.linetext))
      .catch((error: any) => this.bottomSheet.open(ErrorResponseComponent));
    } catch (error) {
      this.bottomSheet.open(ErrorResponseComponent)
    }
  }
  // Sanitize data to usable format
  cleanData(response) {
    this.babyLoader.start();
    this.extractedText = response.join(" ");
    // Send data to AI 
    this.server.submitExtractedTextAndGetQuestions(this.extractedText.replaceAll(`"`, " ").replaceAll(`'`, " "))
    .subscribe((dat: any)=>{
      // AI report
      this.server.submitResult(JSON.stringify(dat['output']['questions']), this.extractedText)
      .subscribe((dat: any)=>{
        this.babyLoader.stop()
        // if suceess
        if(dat.isSuccess) {
          this.bottomSheet.open(UploadResponseComponent)
        }
        // if !success
        else {
          this.babyLoader.stop()
          this.bottomSheet.open(ErrorResponseComponent)
        }
      }, err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
    }, 
    err=>{this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
  }

  // Sanitize and Provide data to fill in the gap comonent
  handleFillTheGapsData(data) {
    const refactured_data = data.join(" ").replaceAll(",", " ").replaceAll(".", " ").replaceAll("-", " ").replaceAll(":", " ").split(" ")
    const data_array  = refactured_data.filter(dat=>dat.length > 3)
    this.server.keepPasteText = data_array;
    this.rout.navigate(['fill'])
  }

}
