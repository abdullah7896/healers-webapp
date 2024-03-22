import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class apiEndPoint {
    URL_APIBase = '';
    URL_Login:string='';
    URL_ForgotPassword:string='';
    URL_ConfirmForgotPassword:string='';
    URL_SignUp:string='';
    URL_GetAllCategory:string='';
    URL_ResendForgotPasswordOTP:string='';
    URL_ConfirmSignUp:string='';
    URL_ResendSignUpOTP:string=''
    constructor() {
        this.initializeMembers()
    }
    private initializeMembers() {
        this.URL_APIBase = environment.apiUrl;
        this.URL_Login=`${this.URL_APIBase}Auth/Login`;
        this.URL_ForgotPassword=`${this.URL_APIBase}Auth/ForgotPassword`;
        this.URL_ConfirmForgotPassword=`${this.URL_APIBase}Auth/ConfirmForgotPassword`;
        this.URL_SignUp=`${this.URL_APIBase}Auth/SignUp`;
        this.URL_GetAllCategory=`${this.URL_APIBase}Category/GetAll`;
        this.URL_ResendForgotPasswordOTP=`${this.URL_APIBase}Auth/ForgotPassword`;
        this.URL_ConfirmSignUp=`${this.URL_APIBase}Auth/ConfirmSignUp`;
        this.URL_ResendSignUpOTP=`${this.URL_APIBase}Auth/ResendSignUpOTP`;
    }
}
