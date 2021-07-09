import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  items = [
    {
      tittle: 'Question & Answer Generator Module',
      body: `This module allows user to input 
      some copied text or snap a page while 
      our AI integrated directly on the app
       extracts text from the image then 
      sends to another AI port on our Azure cloud
      to generate Questions for user.
      The question alongside answers would be 
      validated by the APP upon submission to 
      give score to the user.`
    },
    {
      tittle: 'Language Translator Module',
      body: `This module receives a source 
      language from the user which can either 
      be Yoruba or English ("for now"), then 
      translates it to the desired target the user 
      desires.`
    },
    {
      tittle: 'Memorize on the move Module',
      body: `This module allows user to input some 
      definations in an input box and our AI inbuilt 
      inside the application reads the words for the user 
      and wait for the user to also read out the defination...
      It tells the user if he is wrong or right...
      You can only proceed when you are right.`
    },
    {
      tittle: 'Fill The Gaps Module',
      body: `This module accept two different kind of data sources.
      - The first one is copy and paste text to extract and
      - The second is to take a snapshot of a page then our AI extracts the texts.
      Upon extracting data, The app automatically generates words that are 
      found ambigous within the context, sanitizes it and use it as a 
      fill the gap exercise`
    },
    {
      tittle: 'Image Identifier',
      body: `This module receives an image captured by the App user, 
      transforms it and sends to the AI residing on Azure for detection...
      Response is vocally returned or written to the user.`
    }
  ]

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  // Close bottom sheet
  close() {
    this.bottomSheet.dismiss()
  }
}
