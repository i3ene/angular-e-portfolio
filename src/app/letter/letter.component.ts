import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {
  @Input() width: string;
  @Input() stroke: number;
  @Input() color: string;
  @Input() animations: boolean;
  @Input() d: string;
  @Input() view: string;
  @Input() set options(value: any) {
    if (value.width) this.width = value.width;
    if (value.stroke) this.stroke = value.stroke;
    if (value.color) this.color = value.color;
    if (value.d) this.d = value.d;
    if (value.view) this.view = value.view;
  }
}