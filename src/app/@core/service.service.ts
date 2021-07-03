import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  submitResult(result, extractedText) {
    return this.http.post('https://ka-mini-cam.azurewebsites.net/external', {result, extractedText})
  }

  submitExtractedTextAndGetQuestions(text) {
    return this.http.post('http://20.86.175.71/qagen', {text})
  }

  getQuestions() {
    return this.http.get('https://ka-mini-cam.azurewebsites.net/external')
  }

  handleTranslate(text, target, source) {
    return this.http.post('http://3.131.85.125/translate', {text, source, target})
  }

}
