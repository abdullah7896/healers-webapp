import { Injectable } from '@angular/core';
import { BaseHttpService } from '../Http/baseHttpService';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class apiService extends BaseHttpService{
    login(logina : any): Observable<any>{
        return this.post(`${this.apiEndPoints.URL_Login}`,logina)
    };
    ForgotPassword(forgotPassword : any): Observable<any>{
        return this.post(`${this.apiEndPoints.URL_ForgotPassword}?email=${forgotPassword}`,null)
    };
    ConfirmForgotPassword(confirmForgotPassword:any): Observable<any>{
        return this.post(`${this.apiEndPoints.URL_ConfirmForgotPassword}`,confirmForgotPassword)
    };
    ConsumerSignUp(consumerSignUp: any):Observable<any>{
        return this.post(`${this.apiEndPoints.URL_ConsumerSignUp}`,consumerSignUp)
    }

}