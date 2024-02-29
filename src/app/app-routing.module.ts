import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './consumer/signin/signin.component';
import { AppComponent } from './app.component';
import { VendorsigninComponent } from './vendor/vendorsignin/vendorsignin.component';
import { HomeComponent } from './home/home/home.component';
import { VendorLandingPageComponent } from './vendor/vendor-landing-page/vendor-landing-page.component';



const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'signIn',component:SigninComponent},
  {path:'vendors',component:VendorLandingPageComponent},
  {path:'vendorsignin',component:VendorsigninComponent},
  {path:'',component:HomeComponent}
  
 
  
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
