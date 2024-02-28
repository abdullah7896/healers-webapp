import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './consumer/signin/signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { VendorModule } from './vendor/vendor.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { HeroComponentComponent } from './common-components/hero-component/hero-component.component';
import { FooterComponentComponent } from './common-components/footer-component/footer-component.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LandingPageComponent,
    HeroComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorModule,
    FooterComponentComponent,
    
    
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports:[HeroComponentComponent]
})
export class AppModule { }
