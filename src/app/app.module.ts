import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome.component';

import { DifferTestComponent } from './differ-test/differ-test.component';
import { DifferListComponent } from './differ-test/differ-list/differ-list.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    DifferTestComponent,
    DifferListComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
