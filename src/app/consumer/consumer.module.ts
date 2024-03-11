import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerLandingPageComponent } from './consumer-landing-page/consumer-landing-page.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';






@NgModule({
  declarations: [
    ConsumerLandingPageComponent,
    SignUpComponent,
    
    
    
    
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    
  ]
})
export class ConsumerModule { }
