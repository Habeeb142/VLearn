import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ServiceService } from './../../@core/service.service';
import { ErrorResponseComponent } from './../overlay/error-response/error-response.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-identifier',
  templateUrl: './image-identifier.component.html',
  styleUrls: ['./image-identifier.component.css']
})
export class ImageIdentifierComponent implements OnInit {

  responseText: string; image: String;

  constructor(
    private router: Router,
    private babyLoader: NgxUiLoaderService,
    private camera: Camera,
    private bottomSheet: MatBottomSheet,
    private server: ServiceService,
    private tts: TextToSpeech
    ) { }

  ngOnInit(): void {
    this.snapShot()
  }
  // Rout to home
  home() {
    this.router.navigate([''])
  }
  // Rout to back
  back() {
    this.home()
  }

  // Open camera 
  snapShot() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,'+imageData
      this.babyLoader.start()
      // Send image to service to send to AI
      this.server.sendImageForAnalysis(imageData).subscribe((dat: any)=>{
        this.babyLoader.stop()
        // use regex to check if first letter of result is a vowel or consonant
        const pat = /[aeiou]/g
        const res = dat.output.split(",")[0].substring(0, 1).match(pat) == null;
        // cehck end
        this.responseText = `The image is ${ res? 'a' : 'an' } ${dat.output.split(",")[0]}`;
        // handle text to speech function
        this.handleSpeechToText()
        // Handle Error
      }, err => {this.babyLoader.stop(); this.bottomSheet.open(ErrorResponseComponent)})
    }, (err) => {
      this.bottomSheet.open(ErrorResponseComponent)
      // Handle error
     });
  }

  // Handle SpeechToText
  handleSpeechToText() {
    this.tts.speak({ text: this.responseText, rate: 0.55 } )
    .then(() => {})
    .catch((reason: any) => console.log(reason));
  }
 }
