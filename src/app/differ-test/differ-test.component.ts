import { Component } from '@angular/core';
import { DifferTest } from './differ-test.model';

@Component({
  selector: 'app-differ-test',
  templateUrl: './differ-test.component.html'
})
export class DifferTestComponent {
  list: DifferTest[] = [];
  myObj: DifferTest;

  constructor() {
    this.myObj = new DifferTest('1st label',10);
    this.list.push(this.myObj);
  }

  updateMyObject() {
    this.myObj.value = Math.round(Math.random() * 100);
  }
}
