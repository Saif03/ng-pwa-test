import { Component } from '@angular/core';
import { SWLoggerService } from './sw-logger.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(swLogger: SWLoggerService) {
    fromEvent(window, 'online').subscribe(response => {
      console.log('user online - ', response);
      console.log('navigator: ', navigator.onLine);
    });
    fromEvent(window, 'offline').subscribe(response => {
      console.log('user offline - ', response);
      console.log('navigator: ', navigator.onLine);
    });
  }
}
