import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { CommonComponentComponent } from './common-component/common-component.component';
import { LandingPagEComponent } from './vendor/landing-pag-e/landing-pag-e.component';



const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'landingPage', component:LandingPageComponent},
  
  {path:'landing2',component:LandingPagEComponent},
 { path: '', component: SigninComponent }
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
