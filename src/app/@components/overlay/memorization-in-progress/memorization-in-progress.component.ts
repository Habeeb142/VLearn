import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-memorization-in-progress',
  templateUrl: './memorization-in-progress.component.html',
  styleUrls: ['./memorization-in-progress.component.css']
})
export class MemorizationInProgressComponent implements OnInit {
  correct: boolean; index = 0; resultAvailable: boolean = false;
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private speechRecognition: SpeechRecognition, private tts: TextToSpeech, private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listen()
  }
  // Listen to the USER defination function ahndler
  listen() {
    this.resultAvailable = false;
    this.cd.detectChanges()
    // connection to AI
    this.tts.speak({ text: this.data[this.index] + '. Your turn!.', rate: 0.55 } )
    .then(() => this.startVoiceRecognition() )
    .catch((reason: any) => console.log(reason));
  }

  // cHECK PERMISSION AND REQUEST IF NOT EXIST
  startVoiceRecognition() {
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {
     if(!hasPermission) {
       // Request permissions
        this.speechRecognition.requestPermission()
        .then(
          () => this.continue(),
          () => console.log('error')
        )
      }
    })
    this.continue()
  }

  // Listen to the user speaks and AI analyzes it
  continue() {
    // Start the recognition process
    this.speechRecognition.startListening({language: 'en-US'})
    .subscribe(
      (matches: any[]) => {
        this.resultAvailable = true;
        // check if converted speech to text matches the predefined definations
        this.correct = matches[0].toLowerCase().trim() == this.data[this.index].toLowerCase().trim();
        this.index = this.correct? this.index!==this.data.length-2? this.index+1 : this.index=0 : this.index;
        // Response of result
        const status = this.correct ? 'Yes! You are a genius. '+ (this.index==0? "Let's start afresh!" : "Next!" ): `Oops! Sorry, You missed that. Let's do this again!`;
        this.cd.detectChanges()
        // AI Speaks out the result 
        this.tts.speak({ text: status, rate: 0.65 } )
        .then(() => this.listen())
        .catch((reason: any) => console.log(reason));     
      },
      (onerror) => console.log('error:')
  )
  }

}
