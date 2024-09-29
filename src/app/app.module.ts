import {   } from './lazyloadedmodule/lazyloadedmodule.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Homechild1Component } from './home/homechild1/homechild1.component';
import { Homechild2Component } from './home/homechild2/homechild2.component';
import { Homechild3Component } from './home/homechild3/homechild3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Homechild1Component,
    Homechild2Component,
    Homechild3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
