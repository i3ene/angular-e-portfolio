import { Component, Input } from '@angular/core';
import { CacheService } from '../cache.service';
import { FormattedText } from '../formatted-text.model';

@Component({
  selector: 'animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.css']
})
export class AnimatedTextComponent {
  @Input() formattedText: FormattedText[];

  letters: Map<string, any> = new Map([
    [
      'W',
      {
        stroke: 15,
        color: 'var(--white)',
        view: '0 0 140 100',
        width: '38px',
        d: 'm 10 10 l 30 80 l 30 -80 m 60 0 l -30 80 l -30 -80',
      },
    ],
    [
      'e',
      {
        stroke: 6,
        color: 'var(--white)',
        view: '5 0 30 87',
        width: '20px',
        d: 'm 10 71 h 20 l 0 -1 a 1 1 0 0 0 -20 0 m 3 -7 a 1 1 0 0 0 17 17',
      },
    ],
    [
      'l',
      {
        stroke: 16,
        color: 'var(--white)',
        view: '-5 0 38 100',
        width: '10px',
        d: 'm 10 90 v -80',
      },
    ],
    [
      'c',
      {
        stroke: 12,
        color: 'var(--white)',
        view: '-5 0 55 88',
        width: '19px',
        d: 'm 40 75 a 1 1 0 0 1 -30 -30 m 0 30 a 1 1 0 0 1 30 -30',
      },
    ],
    [
      'o',
      {
        stroke: 13,
        color: 'var(--white)',
        view: '0 0 58 118',
        width: '20px',
        d: 'm 30 70 a 1 1 0 0 0 0 40 a 1 1 0 0 0 0 -40',
      },
    ],
    [
      'm',
      {
        stroke: 11,
        color: 'var(--white)',
        view: '0 0 70 97',
        width: '25px',
        d: 'm 10 50 v 40 m 0 -28 a 1 1 0 0 1 27 3 v 25 m 0 -28 a 1 1 0 0 1 27 3 v 25',
      },
    ],
    [
      't',
      {
        stroke: 11,
        color: 'var(--white)',
        view: '7 0 42 96',
        width: '15px',
        d: 'm 40 50 h -25 l 10 -10 v 45 c 0 0 0 6 15 3',
      },
    ],
    [
      'y',
      {
        stroke: 8,
        color: 'var(--white)',
        view: '0 -30 40 100',
        width: '22px',
        d: 'm 10 40 l 10 25 m 10 -25 l -15 40',
      },
    ],
    [
      'r',
      {
        stroke: 7,
        color: 'var(--white)',
        view: '2 0 28 95',
        width: '17px',
        d: 'm 10 90 v -25 m 0 12 c 0 0 1 -13 12 -12',
      },
    ],
    [
      'f',
      {
        stroke: 10,
        color: 'var(--white)',
        view: '-3 0 28 95',
        width: '12px',
        d: 'm 10 90 v -40 c 0 0 -1 -14 15 -10 m -2 17 h -20 ',
      },
    ],
    [
      'i',
      {
        stroke: 11,
        color: 'var(--white)',
        view: '4 0 18 97',
        width: '8px',
        d: 'm 10 90 v -30 m -1 -15 a 1 1 0 0 0 1 0 a 1 1 0 0 0 -1 0',
      },
    ],
    [
      'a',
      {
        stroke: 10,
        color: 'var(--red)',
        view: '0 0 45 93',
        width: '19px',
        d: 'm 10 50 c 0 0 26 -10 27 10 v 26 m 0 -19 c -5 -5 -29 -3 -30 7 c -1 22 30 7 30 0',
      },
    ],
    [
      'b',
      {
        stroke: 8,
        color: 'var(--white)',
        view: '0 0 42 88',
        width: '23px',
        d: 'm 10 70 a 1 1 0 0 1 25 0 a 1 1 0 0 1 -25 0 m 0 12 v -39',
      },
    ],
    [
      'E',
      {
        stroke: 15,
        color: 'var(--blue)',
        view: '0 0 70 100',
        width: '20px',
        d: 'm 60 10 h -50 v 80 h 50 m 0 -40 h -50',
      },
    ],
    [
      '-',
      {
        stroke: 15,
        color: 'var(--blue)',
        view: '0 0 48 94',
        width: '15px',
        d: 'm 10 60 h 20 ',
      },
    ],
    [
      'P',
      {
        stroke: 15,
        color: 'var(--blue)',
        view: '0 0 57 100',
        width: '16px',
        d: 'm 10 90 v -80 h 20 a 1 1 0 1 1 0 40 h -20',
      },
    ],
    [
      'u',
      {
        stroke: 10,
        color: 'var(--white)',
        view: '0 0 48 90',
        width: '20px',
        d: 'm 10 50 v 20 a 1 1 0 0 0 27 0 v -20 m 0 20 l 0 13',
      },
    ],
    [
      'A',
      {
        stroke: 14,
        color: 'var(--red)',
        view: '0 0 80 97',
        width: '25px',
        d: 'm 10 90 l 30 -80 l 30 80 m -12 -30 h -36',
      },
    ],
    [
      'n',
      {
        stroke: 11,
        color: 'var(--red)',
        view: '0 0 50 95',
        width: '20px',
        d: 'm 10 50 v 40 m 3 -28 a 1 1 0 0 1 27 6 v 22 ',
      },
    ],
    [
      'g',
      {
        stroke: 8,
        color: 'var(--white)',
        view: '2 0 42 68',
        width: '23px',
        d: 'm 10 50 a 1 1 0 0 1 25 0 a 1 1 0 0 1 -25 0 m 25 -13 v 32 c 0 0 -5 14 -23 5',
      },
    ],
    [
      '!',
      {
        stroke: 11,
        color: 'var(--red)',
        view: '0 0 50 88',
        width: '20px',
        d: 'm 10 80 m -1 0 a 1 1 0 0 0 2 0 a 1 1 0 0 0 -2 0 m 1 -20 v -40',
      },
    ],
  ]);

  constructor(public cache: CacheService) {}

  getColor(col: string): string {
    return `var(--${col})`;
  }

}