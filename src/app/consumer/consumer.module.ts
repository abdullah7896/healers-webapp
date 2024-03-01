import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerLandingPageComponent } from './consumer-landing-page/consumer-landing-page.component';
import { CommonComponentsModule } from '../common-components/common-components.module';



@NgModule({
  declarations: [
    ConsumerLandingPageComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule
  ]
})
export class ConsumerModule { }
