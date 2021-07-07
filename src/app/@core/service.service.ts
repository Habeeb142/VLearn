import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  comingFrom: String = ''; keepPasteText;

  // Submit Question and answer generated to the database
  submitResult(result, extractedText) {
    return this.http.post('https://ka-mini-cam.azurewebsites.net/external', {result, extractedText})
  }
  // Submit extracted text to the AI model for question extraction
  submitExtractedTextAndGetQuestions(text) {
    return this.http.post('http://20.86.175.71/qagen', {text})
  }
  // Get Questions and answers from the database
  getQuestions() {
    return this.http.get('https://ka-mini-cam.azurewebsites.net/external')
  }
  // Endpoint to hit the AI for translation
  handleTranslate(text, target, source) {
    return this.http.post('http://3.131.85.125/translate', {text, source, target})
  }

  // Endpoint to send picture to AI For Analysis
  sendImageForAnalysis(image) {
    return this.http.post('http://3.131.85.125/translate', {image})
  }

}
