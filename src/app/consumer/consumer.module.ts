import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerLandingPageComponent } from './consumer-landing-page/consumer-landing-page.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { ConsumerPreferencesComponent } from './consumer-preferences/consumer-preferences.component';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { SlickCarouselModule } from 'ngx-slick-carousel';







@NgModule({
  declarations: [
    ConsumerLandingPageComponent,
    SignUpComponent,
    ConsumerPreferencesComponent,
    
    
    
    
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    NgOtpInputModule,
    SlickCarouselModule
    
  ]
})
export class ConsumerModule { }
