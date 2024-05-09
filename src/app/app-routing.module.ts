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
import { VendorLoginLandingPageComponent } from './vendor/vendor-login-landing-page/vendor-login-landing-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { ProfileComponent } from './vendor/profile/profile.component';
import { ServicesComponent } from './vendor/services/services.component';
import { AddServicesComponent } from './vendor/Services/add-services/add-services.component';




const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'signIn',component:SigninComponent},
  {path:'vendors',component:VendorLandingPageComponent},
  {path:'vendorsignin',component:VendorsigninComponent},
  {path:'consumer',component:ConsumerLandingPageComponent},
  {path:'consumersignin', component:SigninComponent},
  {path:'consumersignup', component:SignUpComponent},
  {path:'Vendorsignup', component:VendorSignUpComponent},
  {path:'Preferences',component:ConsumerPreferencesComponent, canActivate:[authGuardGuard]},
  {path:'ProfileDetailing', component:ProfileDetailingComponent, canActivate:[authGuardGuard]},
  {path:'Practitioners', component:VendorLoginLandingPageComponent ,canActivate:[authGuardGuard]},
  {path:'Practitioners-Profile', component:ProfileComponent ,canActivate:[authGuardGuard]},
  {path:'Services', component:ServicesComponent},
  {path:'AddServices', component:AddServicesComponent},
  {path:'',component:HomeComponent}
  
 
  
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
