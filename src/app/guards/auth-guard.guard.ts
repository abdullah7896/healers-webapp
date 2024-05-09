
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/ProfileDetailing','/Preferences','/Practitioners'];
  
  // Retrieve session type from localStorage
  const sessionType = localStorage.getItem('sessionType');
  if (sessionType === 'true') {
    return true;
  } else {
    
    router.navigate(['/']);
    return false;
  }
};





























// If sessionType is 'true' (indicating successful sign-up), allow access to protected routes


// Redirect to '/' if sessionType is not 'true'










// import { CanActivateFn ,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
// import {inject} from '@angular/core';
// // import{session} from 'src/app/Service/session.service'


// export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
//   const router:Router =inject(Router);
//   const protectedroutes:string [] =['/ProfileDetailing']
//   return protectedroutes.includes(state.url)
//   ? router.navigate(['/'])
//   :false;
// };





// import { CanActivateFn ,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
// import { inject } from '@angular/core';

// export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const router: Router = inject(Router);
//   const protectedroutes: string[] = ['/VendorLoginLandingPage'];

//   // Check if session type is stored in local storage
//   const sessionType = localStorage.getItem('sessionType');
//   const sessionTypeExists = sessionType !== null;

//   if (!sessionTypeExists) {
//     // No session type, navigate to VendorLoginLandingPage
//     return router.navigate(['/VendorLoginLandingPage']);
//   }

//   return protectedroutes.includes(state.url) ? router.navigate(['/Vendorsignup']) : true;
// };

// 
// import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { inject } from '@angular/core';

// export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const router: Router = inject(Router);
  
//   // Check if local storage is empty
//   const isLocalStorageEmpty = localStorage.length === 0;

//   // Navigate based on the presence of data
//   return isLocalStorageEmpty
//     ? router.navigate(['/vendorsignin'])
//     : router.navigate(['/VendorLoginLandingPage']);
// };
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable, map } from 'rxjs';
// import { apiService } from 'src/app/Service/apiService';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private apiService: apiService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     // Check if user is signed up
//     const confirmSignUp = true; // Assuming this value indicates the user is signed up

//     // Make API call to check if user is signed up
//     return this.apiService.ConfirmSignUp(confirmSignUp).pipe(map(response => {
//       if (response === true) {
//         // User is signed up, allow access to the route
//        this.router.navigate(['/VendorLoginLandingPage'])
//         return true;
//       } else {
//         // User is not signed up, redirect to the sign-up flow
//         this.router.navigate(['/vendorsignup']);
//         return false;
//       }
//     }));
//   }

// }
// export const authGuardGuard = AuthGuard;

