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

    // Onload function
  ngOnInit(): void {
    // Get data from where it is been kept in ther service then sanitize and reform to visual display
    let data = this.server?.keepPasteText;
    (data == undefined)? this.back() : null
    this.data = []
    // For loop 
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
  // Function to generator random number
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Back function Handler
  back() {
    this.rout.navigate(['fill-the-gaps'])
  }
  // Home function handler
  home() {
    this.rout.navigate([''])
  }
  // Submit function handler
  handleSubmit() {
    for (let i = 0; i < this.data.length; i++) {
      let element = this.data[i];
      element.correct = element['missing_text'] == element?.answer;
      element.submitted = true
    }
  }
  // Get score handler
  handleScore() {
    return ((this.data.filter(dat=>dat.correct == true).length/this.data.length)*100).toFixed(0)
  }
}
