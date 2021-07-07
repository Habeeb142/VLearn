# Tunga
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Database and AI mODEL 
Hosted on AZURE


## Home
This houses the 5 different tabs we have and it serves as the index page

## Different Tabs 

Different tabs exist on the application viz-a-viz:
    Question and Answer Tab
    Text Translation Tab
    Learn On The Move Tab
    Memorize on the move Tab
    Fill The Gaps Tab
    Image Identifier Tab

## Question and Answer Tab
This Tab allows user to input some copied text or snap a page while our AI extracts text from the image and send sto another AI port to generate Question for user.
The question alongside answers would be validated by the APP to give score to the user

## Fill The Gaps Tab
Fill in the gap tab accept two different kind of data source.
    The first one is copy and paste text to extract and
    The second is to take a snapshot of a page then our AI extracts the texts.

Once texts are been extracted, the onload function in the fill-the-gap components generates all the available word to use for the exercise

##  Memorize on the move Tab
This Tab allows user to input some definations in an input box and our AI reads the words for the user and wait for the user to also read out the defibation...It tells the user if he is wrong or right...You can only proceed when you are right

##  Translation Tab
This tab reseives a source language from the user which can either be Yoruba or English for now, then transalte it to the desired target the user desires.
