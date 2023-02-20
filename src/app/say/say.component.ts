import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent {
  @Input() text: string;
}