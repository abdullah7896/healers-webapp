import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonComponentComponent } from './common-component/common-component.component';


const routes: Routes = [
  {path:'appcomp', component:AppComponent},
  {path:'landingPage', component:LandingPageComponent},
  {path:'CommonComp',component:CommonComponentComponent},
  { path: '', component: SigninComponent }
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
