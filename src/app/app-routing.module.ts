import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './consumer/signin/signin.component';
import { AppComponent } from './app.component';
import { VendorsigninComponent } from './vendor/vendorsignin/vendorsignin.component';
import { HomeComponent } from './home/home/home.component';
import { VendorLandingPageComponent } from './vendor/vendor-landing-page/vendor-landing-page.component';
import { ConsumerLandingPageComponent } from './consumer/consumer-landing-page/consumer-landing-page.component';
import { SignUpComponent } from './consumer/sign-up/sign-up.component';
import { VendorSignUpComponent } from './vendor/vendor-sign-up/vendor-sign-up.component';
import { ConsumerPreferencesComponent } from './consumer/consumer-preferences/consumer-preferences.component';
import { ProfileDetailingComponent } from './vendor/profile-detailing/profile-detailing.component';



const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'signIn',component:SigninComponent},
  {path:'vendors',component:VendorLandingPageComponent},
  {path:'vendorsignin',component:VendorsigninComponent},
  {path:'consumer',component:ConsumerLandingPageComponent},
  {path:'consumersignin', component:SigninComponent},
  {path:'consumersignup', component:SignUpComponent},
  {path:'Vendorsignup', component:VendorSignUpComponent},
  {path:'Preferences',component:ConsumerPreferencesComponent},
  {path:'ProfileDetailing', component:ProfileDetailingComponent},
  {path:'',component:HomeComponent}
  
 
  
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
