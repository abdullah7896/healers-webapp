import { Injectable } from '@angular/core';
import { BaseHttpService } from '../Http/baseHttpService';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class apiService extends BaseHttpService {
    subscribe(arg0: (response: any) => void) {
      throw new Error('Method not implemented.');
    }
    login(logina: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_Login}`, logina)
    };
    refreshAccessToken(refreshToken: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_Refresh}`, refreshToken)
    };
    ForgotPassword(forgotPassword: any, userType: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ForgotPassword}?email=${forgotPassword}&userType=${userType}`, null)
    };
    ConfirmForgotPassword(confirmForgotPassword: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ConfirmForgotPassword}`, confirmForgotPassword)
    };
    SignUp(signUp: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_SignUp}`, signUp)
    };
    GetAllCategory(): Observable<any> {
        return this.get(`${this.apiEndPoints.URL_GetAllCategory}`)
    };
    ResendForgotPasswordOTP(forgotPassword: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ResendForgotPasswordOTP}?email=${forgotPassword}`, null)
    };
    ConfirmSignUp(confirmSignUp: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ConfirmSignUp}`, confirmSignUp)
    };
    ResendSignUpOTP(resendSignUpOTP: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ResendSignUpOTP}?email=${resendSignUpOTP}`, null)
    };
    ConsumerPreference(consumerPreference: any): Observable<any> {
        return this.post(`${this.apiEndPoints.URL_ConsumerPreference}`, consumerPreference)
    };
    ParctitionerPreferences(ParctitionerPreferences: any): Observable<any> {
        return this.post(`${this.apiEndPoints.Url_PractitionerPrefrences}`, ParctitionerPreferences)
    };

}