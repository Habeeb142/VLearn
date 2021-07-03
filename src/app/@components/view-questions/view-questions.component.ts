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

  ngOnInit(): void {
    this.getQuestions()
  }

  getQuestions() {
    this.babyLoader.start()
    this.server.getQuestions().subscribe((dat: any)=>{
      this.babyLoader.stop()
      if(dat.isSuccess) {
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

  back() {
    this.rout.navigate(['question-and-answer'])
  }

  home() {
    this.rout.navigate([''])
  }

  setAnswer(mainIndex, subIndex, answer) {
    this.questions[mainIndex]['result'][subIndex]['my_answer'] = answer;
  }
  
  handleSubmit(mainIndex) {
    this.questions[mainIndex]['submitted'] = true;
    for (let index = 0; index < this.questions[mainIndex]['result'].length; index++) {
      const element = this.questions[mainIndex]['result'][index];
      element.status = element['answer'] == element['my_answer'];
    }
    this.questions[mainIndex]['my_score'] = this.getResult(this.questions[mainIndex]['result'])
    this.isOpen = []
  }

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

  getResult(result) {
    console.log(result)
    return (((result.filter(dat=>dat?.status==true).length)/result.length)*100).toFixed(0)
  }
}
