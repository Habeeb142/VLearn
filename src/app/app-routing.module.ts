import { ImageIdentifierComponent } from './@components/image-identifier/image-identifier.component';
import { FillTheGapsComponent } from './@components/fill-the-gaps/fill-the-gaps.component';
import { CopyAndPasteTextsComponent } from './@components/copy-and-paste-texts/copy-and-paste-texts.component';
import { TranslateComponent } from './@components/translate/translate.component';
import { ViewQuestionsComponent } from './@components/view-questions/view-questions.component';
import { QuestionAndAnswerComponent } from './@components/question-and-answer/question-and-answer.component';
import { LearnOnTheMoveComponent } from './@components/learn-on-the-move/learn-on-the-move.component';
import { HomeComponent } from './@components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'learn-on-the-move', component: LearnOnTheMoveComponent },
  { path: 'question-and-answer', component: QuestionAndAnswerComponent },
  { path: 'view-questions', component: ViewQuestionsComponent },
  { path: 'translate', component: TranslateComponent },
  { path: 'copy-paste-texts', component: CopyAndPasteTextsComponent },
  { path: 'fill-the-gaps', component: QuestionAndAnswerComponent },
  { path: 'fill', component: FillTheGapsComponent },
  { path: 'identify-image', component: ImageIdentifierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
