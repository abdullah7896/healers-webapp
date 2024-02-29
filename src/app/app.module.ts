import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './consumer/signin/signin.component';
import { VendorModule } from './vendor/vendor.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';




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
    HomeModule
   
    
    
    
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
