import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';;
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatBottomSheetModule, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatRippleModule} from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SwiperModule } from "swiper/angular";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { OCR } from '@ionic-native/ocr/ngx';
import { Swiper } from 'swiper';
import { HomeComponent } from './@components/home/home.component';
import { LearnOnTheMoveComponent } from './@components/learn-on-the-move/learn-on-the-move.component';
import { MemorizationInProgressComponent } from './@components/overlay/memorization-in-progress/memorization-in-progress.component';
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { QuestionAndAnswerComponent } from './@components/question-and-answer/question-and-answer.component';
import { UploadResponseComponent } from './@components/overlay/upload-response/upload-response.component';
import { ViewQuestionsComponent } from './@components/view-questions/view-questions.component';
import { TranslateComponent } from './@components/translate/translate.component';
import { ErrorResponseComponent } from './@components/overlay/error-response/error-response.component';
import { CopyAndPasteTextsComponent } from './@components/copy-and-paste-texts/copy-and-paste-texts.component';
import { FillTheGapsComponent } from './@components/fill-the-gaps/fill-the-gaps.component';
import { ImageIdentifierComponent } from './@components/image-identifier/image-identifier.component';

import { IonicModule } from '@ionic/angular'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnOnTheMoveComponent,
    MemorizationInProgressComponent,
    QuestionAndAnswerComponent,
    UploadResponseComponent,
    ViewQuestionsComponent,
    TranslateComponent,
    ErrorResponseComponent,
    CopyAndPasteTextsComponent,
    FillTheGapsComponent,
    ImageIdentifierComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    SwiperModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [Swiper, SwiperModule, OCR, TextToSpeech, Camera, SpeechRecognition],
  bootstrap: [AppComponent]
})
export class AppModule { }
