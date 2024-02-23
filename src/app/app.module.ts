import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponentComponent } from './common-component/hero-component/hero-component.component';
import { FooterComponentComponent } from './common-component/footer-component/footer-component.component';
import { CommonComponentComponent } from './common-component/common-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LandingPageComponent,
    HeroComponentComponent,
    FooterComponentComponent,
    CommonComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
