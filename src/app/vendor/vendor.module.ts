import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LandingPagEComponent } from './landing-pag-e/landing-pag-e.component';
import { VendorsigninComponent } from './vendorsignin/vendorsignin.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { VendorLandingPageComponent } from './vendor-landing-page/vendor-landing-page.component';
import { VendorSignUpComponent } from './vendor-sign-up/vendor-sign-up.component';
import { ProfileDetailingComponent } from './profile-detailing/profile-detailing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { VendorLoginLandingPageComponent } from './vendor-login-landing-page/vendor-login-landing-page.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { DashbordNavbarComponent } from './dashbord-navbar/dashbord-navbar.component';
import { DashbordSidebarComponent } from './dashbord-sidebar/dashbord-sidebar.component';
import { ServicesComponent } from './services/services.component';
import { AddServicesComponent } from './Services/add-services/add-services.component';




@NgModule({
  declarations: [
    
    VendorsigninComponent,
  VendorLandingPageComponent,
 
  VendorSignUpComponent,
    ProfileDetailingComponent,
    VendorLoginLandingPageComponent,
    ProfileComponent,
    DashbordNavbarComponent,
    DashbordSidebarComponent,
    ServicesComponent,
    AddServicesComponent
    
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgOtpInputModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
})
export class VendorModule { }
