import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './consumer/signin/signin.component';
import { VendorModule } from './vendor/vendor.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ConsumerModule } from './consumer/consumer.module';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthInterceptor } from './Http/authInterceptor';







@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorModule,
    CommonModule,
    CommonComponentsModule,
    ConsumerModule,
    HomeModule ,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    SlickCarouselModule
    

    
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
