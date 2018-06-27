import { Component } from '@angular/core';
import { SWLoggerService } from './sw-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(swLogger: SWLoggerService) {
}
