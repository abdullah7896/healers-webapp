import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LandingPagEComponent } from './landing-pag-e/landing-pag-e.component';
import { VendorsigninComponent } from './vendorsignin/vendorsignin.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { VendorLandingPageComponent } from './vendor-landing-page/vendor-landing-page.component';
import { VendorSignUpComponent } from './vendor-sign-up/vendor-sign-up.component';
import { ProfileDetailingComponent } from './profile-detailing/profile-detailing.component';





@NgModule({
  declarations: [
    
    VendorsigninComponent,
  VendorLandingPageComponent,
 
  VendorSignUpComponent,
    ProfileDetailingComponent
    
  ],
  imports: [
    CommonModule,
    CommonComponentsModule
  ],
  
})
export class VendorModule { }
