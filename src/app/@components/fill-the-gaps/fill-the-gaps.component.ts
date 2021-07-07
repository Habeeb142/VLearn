import { ServiceService } from './../../@core/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-the-gaps',
  templateUrl: './fill-the-gaps.component.html',
  styleUrls: ['./fill-the-gaps.component.css']
})
export class FillTheGapsComponent implements OnInit {
  data = []; refactoredData;
  
  constructor(
    private rout: Router,
    private server: ServiceService
    ) { }

  ngOnInit(): void {
    let data = this.server?.keepPasteText;
    (data == undefined)? this.back() : null
    this.data = []

    for (let index = 0; index < data?.length; index++) {
      const element = data[index];
      const generatedValue = parseInt(this.getRandomArbitrary(0, element.length-1).toFixed(0))
      
      this.data.push(
        {
          first_text: element.substring(0, generatedValue),
          second_text: element.substring( generatedValue+1),
          missing_text: element.substring(generatedValue, generatedValue+1),
          real_text: element
        }
      )
    };
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  back() {
    this.rout.navigate(['fill-the-gaps'])
  }

  home() {
    this.rout.navigate([''])
  }

  handleSubmit() {
    for (let i = 0; i < this.data.length; i++) {
      let element = this.data[i];
      element.correct = element['missing_text'] == element?.answer;
      element.submitted = true
    }
  }

  handleScore() {
    return ((this.data.filter(dat=>dat.correct == true).length/this.data.length)*100).toFixed(0)
  }
}
