import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  // Array handling different available tabs
  items = [ 
    { 
      text: 'Generate Questions & Answers',
      bgColor: '#732CA4',
      boxShadow: '0px 0px 8px rgba(115, 44, 164, 0.8)',
      rout: 'question-and-answer'
    },
    { 
      text: 'Translate Languages',
      bgColor: '#F8A220',
      boxShadow: '0px 0px 8px rgba(248, 162, 32, 0.8)',
      rout: 'translate'
    },
    { 
      text: 'Memorize on the move',
      bgColor: '#732CA4',
      boxShadow: '0px 0px 8px rgba(115, 44, 164, 0.8)',
      rout: 'learn-on-the-move'
    },
    { 
      text: 'Fill The Gaps',
      bgColor: '#F8A220',
      boxShadow: '0px 0px 8px rgba(248, 162, 32, 0.8)',
      rout: 'fill-the-gaps'
    },
    { 
      text: 'Identify Image',
      bgColor: '#732CA4',
      boxShadow: '0px 0px 8px rgba(115, 44, 164, 0.8)',
      rout: 'identify-image'
    },
   ]

  ngOnInit(): void {
  }
  // Navigation handler
  screenTo(rout) {
    this.router.navigate([rout])
  }

}
