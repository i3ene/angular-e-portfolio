import { Component, ViewChild } from '@angular/core';
import type { OnInit } from '@angular/core';
import { CacheService } from './cache.service';
import { FormattedText } from './formatted-text.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: FormattedText[] = [
    { color: 'white', text: 'Welcome to my ' },
    { color: 'blue', text: 'E-Portfolio ' },
    { color: 'white', text: 'about ' },
    { color: 'red', text: 'Angular' },
    { color: 'white', text: '!' }
  ]

  constructor(public cache: CacheService) {}
}
