import { MemorizationInProgressComponent } from './../overlay/memorization-in-progress/memorization-in-progress.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-on-the-move',
  templateUrl: './learn-on-the-move.component.html',
  styleUrls: ['./learn-on-the-move.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LearnOnTheMoveComponent implements OnInit {
  // Predefined texts
  text: string = `Biology is the study of plant and animal.
  A Computer is an electronic machine that processes data and give out information.
  Agriculture is the practice of cultivating plants and livestock.`

  constructor(
    private rout: Router,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.rout.navigate([''])
  }
  // Funcion handling submit event
  handleMemorize() {
    if(this.text!=='') {
      // Sends data to a bottom sheet
      this.bottomSheet.open(MemorizationInProgressComponent, { data: this.text.split('.') })
    }
  }
}
