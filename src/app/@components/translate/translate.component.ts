import { ServiceService } from './../../@core/service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  // Available languages
  language = {
    from: 'en',
    to: 'yo'
  }
  text: String = ''; result: String = '';

  // Available languages in OBjext of array format
  languages = [
    { value: 'English', id: 'en' },
    { value: 'Yoruba', id: 'yo' }
  ]
  constructor(
    private rout: Router,
    private babyLoaader: NgxUiLoaderService,
    private server: ServiceService
    ) { }

  ngOnInit(): void {
  }

  back() {
    this.rout.navigate([''])
  }

  // Handle translate function
  handleTranslate() {
    // if translation source and target are equal
    if(this.language.to == this.language.from) {
      this.result = this.text
    }

    // If not equal
    else {
      this.babyLoaader.start();
      // Sends data to our AI
      this.server.handleTranslate(this.text, this.language.to, this.language.from)
      .subscribe((dat: any)=>{
        // AI response
        this.babyLoaader.stop();
        this.result = dat.output[0]
      }, err=>{ this.babyLoaader.stop(); console.log(err) })
    }
  }
  // Clear texts
  handleClear() {
    this.text = ''
  }

}
