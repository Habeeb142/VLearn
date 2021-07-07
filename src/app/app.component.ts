import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({providedIn: 'root'})
export class AppComponent {
  title = 'Tunga';

  private previousUrl: string;
  private currentUrl: string;

  constructor(
    private rout: Router,
    private bottomSheet: MatBottomSheet
    ) { 
      this.currentUrl = this.rout.url;
      this.previousUrl = null;
      this.rout.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.urlAfterRedirects;
      });
    }

  ngOnInit(): void {
    this.previousUrl = localStorage.getItem('__ROUT__');
    this.previousUrl ? this.isBackButton() : null;
    
    document.addEventListener('backbutton', (e)=>{
      e.preventDefault();
      localStorage.setItem('__ROUT__', this.previousUrl.substring(1))
      location.href = 'index.html';
    }, false)
  }

  isBackButton() {
    localStorage.clear()
    this.rout.navigate([this.previousUrl]);
  }
}
