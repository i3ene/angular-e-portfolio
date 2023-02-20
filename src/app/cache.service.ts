import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  get animations(): boolean {
    const value = localStorage['animations'];
    return value == undefined ? true : JSON.parse(localStorage['animations']);
  }
  set animations(value: boolean) {
    localStorage['animations'] = value;
  }
}
