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

  responseText: string;

  constructor(
    private router: Router,
    private babyLoader: NgxUiLoaderService,
    private camera: Camera,
    private bottomSheet: MatBottomSheet
    ) { }

  ngOnInit(): void {
    this.snapShot()
  }

  home() {
    this.router.navigate([''])
  }

  back() {
    this.home()
  }

  snapShot() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      alert(JSON.stringify(imageData))
     }, (err) => {
      this.bottomSheet.open(ErrorResponseComponent)
      // Handle error
     });
  }
 }
