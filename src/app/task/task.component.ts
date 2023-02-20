import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  num1: number = 3;
  num2: number = 2;

  /** TASK 3 **/
  people: string[] = ['Mark', 'Peter'];
  // HINT: 'this.people.push("MyName");' to add to array
}
