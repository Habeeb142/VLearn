import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ServiceService } from './../../@core/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  questions = []; isOpen = [];
  constructor(
    private server: ServiceService,
    private babyLoader: NgxUiLoaderService,
    private rout: Router
    ) { }

    // onload
  ngOnInit(): void {
    this.getQuestions()
  }

  // fetch questions from our Azure database
  getQuestions() {
    this.babyLoader.start()
    // Go through the service to fetch data from the databse
    this.server.getQuestions().subscribe((dat: any)=>{
      this.babyLoader.stop()
      if(dat.isSuccess) {
        // array.reverse the data
        this.questions = dat['results'].reverse();
        // JSON.parse the results from AI
        for (let index = 0; index < this.questions.length; index++) {
          const element = this.questions[index];
          element.result = JSON.parse(element['result']);

          // set correct option into the options
          for (let x = 0; x < element.result.length; x++) {
            element['result'][x]['options'].push(element['result'][x]['answer']);
            // handle shuffle
            this.shuffle(element['result'][x]['options'])
          }
        }; 
      }
    }, err => {
      this.babyLoader.stop()
      alert('Network Error');
    })
  }

  // back function
  back() {
    this.rout.navigate(['question-and-answer'])
  }
  // Home function
  home() {
    this.rout.navigate([''])
  }
  
  // Handle submit handler
  handleSubmit(mainIndex) {
    this.questions[mainIndex]['submitted'] = true;
    for (let index = 0; index < this.questions[mainIndex]['result'].length; index++) {
      const element = this.questions[mainIndex]['result'][index];
      element.status = element['answer'] == element['my_answer'];
    }
    this.questions[mainIndex]['my_score'] = this.getResult(this.questions[mainIndex]['result'])
    this.isOpen = []
  }

  // Set answer to specific question upon submission by the user
  setAnswer(mainIndex, subIndex, answer) {
    this.questions[mainIndex]['result'][subIndex]['my_answer'] = answer;
  }

  // Shuffle options
  shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  // Get result upon submission
  getResult(result) {
    console.log(result)
    return (((result.filter(dat=>dat?.status==true).length)/result.length)*100).toFixed(0)
  }
}
