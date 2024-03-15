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
    URL_ConsumerSignUp:string='';
    URL_GetAllCategory:string='';
    URL_PrectitionerSignUp:string=''
    constructor() {
        this.initializeMembers()
    }
    private initializeMembers() {
        this.URL_APIBase = environment.apiUrl;
        this.URL_Login=`${this.URL_APIBase}Auth/Login`;
        this.URL_ForgotPassword=`${this.URL_APIBase}Auth/ForgotPassword`;
        this.URL_ConfirmForgotPassword=`${this.URL_APIBase}Auth/ConfirmForgotPassword`;
        this.URL_ConsumerSignUp=`${this.URL_APIBase}Auth/SignUp`;
        this.URL_GetAllCategory=`${this.URL_APIBase}Category/GetAll`;
        this.URL_PrectitionerSignUp=`${this.URL_APIBase}Auth/SignUp`;
    }
}
