import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `Welcome to the all new welcome component, <span routerLink="">back</span><br/>
  <app-differ-test></app-differ-test>`
})
export class WelcomeComponent {}
