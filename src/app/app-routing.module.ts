import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './consumer/signin/signin.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPagEComponent } from './vendor/landing-pag-e/landing-pag-e.component';
import { VendorsigninComponent } from './vendor/vendorsignin/vendorsignin.component';



const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'', component:LandingPageComponent},
  {path:'signIn',component:SigninComponent},
  {path:'landing2',component:LandingPagEComponent},
  {path:'vendorsignin',component:VendorsigninComponent},
 
  
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
