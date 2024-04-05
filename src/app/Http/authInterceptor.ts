import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { apiService } from '../Service/apiService';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private refreshTokenInProgress = false;
    private tokenSubject = new BehaviorSubject<any>(null);
    constructor(private apiService: apiService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.getJwtToken(request);
        if (!accessToken) {
            return next.handle(request);
        }
        return next.handle(this.attachTokenToRequest(request, accessToken)).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    return this.refreshTokenAndRetry(request, next);
                }
                return throwError(error);
            })
        );
    }
    private refreshTokenAndRetry(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.tokenSubject.next(null); // Clear any existing token
            let userData = this.getUserData();
            let refreshToken = { id: userData?.user?.id ?? '', refreshToken: userData?.refreshToken ?? '' }
            return this.apiService.refreshAccessToken(refreshToken).pipe(
                switchMap((response: any) => {
                    // if(response.status)
                    {
                        console.log(`Refresh token API returned: ${response}`);
                        this.tokenSubject.next(response.accessToken); // Update the new access token
                        this.refreshTokenInProgress = false;
                        localStorage.setItem('userData', JSON.stringify(response.result[0]))
                        return next.handle(this.attachTokenToRequest(request, response.result[0]?.accessToken));
                    }
                    // return throwError;
                }),
                catchError((error) => {
                    // Handle refresh token failure (e.g., redirect to login page)
                    console.error('Refresh token failed:', error);
                    this.refreshTokenInProgress = false;
                    // You can also log the user out or handle other scenarios here
                    return throwError(error);
                })
            );
        } else {
            // Wait for the existing refresh token request to complete
            return this.tokenSubject.pipe(
                switchMap((token) => {
                    if (token) {
                        return next.handle(this.attachTokenToRequest(request, token));
                    } else {
                        // No valid token, proceed without authorization
                        return next.handle(request);
                    }
                })
            );
        }
    }
    getJwtToken(request: HttpRequest<any>) {
        let requestUrl = request.url.toLocaleLowerCase();
        if (requestUrl.includes('auth') || requestUrl.includes('category/get')) {
            return ''
        }
        const userData = JSON.parse(localStorage.getItem('userData') ?? '')
        return userData?.accessToken ?? ''
    }
    getUserData() {
        return JSON.parse(localStorage.getItem('userData') ?? '')
    }
    private attachTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}