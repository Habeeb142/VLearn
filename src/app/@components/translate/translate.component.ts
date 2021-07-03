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

  language = {
    from: 'en',
    to: 'yo'
  }
  text: String = ''; result: String = '';
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

  handleTranslate() {
    if(this.language.to == this.language.from) {
      this.result = this.text
    }
    else {
      this.babyLoaader.start();
      this.server.handleTranslate(this.text, this.language.to, this.language.from)
      .subscribe((dat: any)=>{
        this.babyLoaader.stop();
        this.result = dat.output[0]
      }, err=>{ this.babyLoaader.stop(); console.log(err) })
    }
  }

  handleClear() {
    this.text = ''
  }

}
