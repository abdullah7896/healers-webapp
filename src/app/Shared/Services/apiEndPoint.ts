import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class apiEndPoint {
    URL_APIBase = '';
    URL_Login:string='';
    URL_Refresh:string='';
    URL_ForgotPassword:string='';
    URL_ConfirmForgotPassword:string='';
    URL_SignUp:string='';
    URL_GetAllCategory:string='';
    URL_ResendForgotPasswordOTP:string='';
    URL_ConfirmSignUp:string='';
    URL_ResendSignUpOTP:string='';
    URL_ConsumerPreference:string='';
    Url_PractitionerPrefrences:string='';
    Url_PractitionerBussinessPrefrences:string='';
    Url_PractitionerUploadUserImg:string='';
    Url_PractitionergetById:string='';
    Url_PractitionerUpdateprofileapi:string='';
    Url_PractitionerAddService:string='';
    Url_PractitionerAddedServicebyid:string='';
   



    constructor() {
        this.initializeMembers()
    }
    private initializeMembers() {
        this.URL_APIBase = environment.apiUrl;
        this.URL_Login=`${this.URL_APIBase}Auth/Login`;
        this.URL_Refresh=`${this.URL_APIBase}Auth/RefreshAccessToken`;
        this.URL_ForgotPassword=`${this.URL_APIBase}Auth/ForgotPassword`;
        this.URL_ConfirmForgotPassword=`${this.URL_APIBase}Auth/ConfirmForgotPassword`;
        this.URL_SignUp=`${this.URL_APIBase}Auth/SignUp`;
        this.URL_GetAllCategory=`${this.URL_APIBase}Category/GetAll`;
        this.URL_ResendForgotPasswordOTP=`${this.URL_APIBase}Auth/ForgotPassword`;
        this.URL_ConfirmSignUp=`${this.URL_APIBase}Auth/ConfirmSignUp`;
        this.URL_ResendSignUpOTP=`${this.URL_APIBase}Auth/ResendSignUpOTP`;
        this.URL_ConsumerPreference=`${this.URL_APIBase}Consumer/CreateConsumerPreference`;
        this.Url_PractitionerPrefrences=`${this.URL_APIBase}Practitioner/AddPractitionerTag`;
        this.Url_PractitionerBussinessPrefrences=`${this.URL_APIBase}Practitioner/AddPractitionerBussinessDetail`;
        this.Url_PractitionerUploadUserImg=`${this.URL_APIBase}Practitioner/UploadUserImages`;
        this.Url_PractitionerUpdateprofileapi=`${this.URL_APIBase}Practitioner/UpdatePractitionerProfile`;
        this.Url_PractitionergetById = `${this.URL_APIBase}Practitioner/GetById`;
        this.Url_PractitionerAddService = `${this.URL_APIBase}OfferedServices/AddService`;
        this.Url_PractitionerAddedServicebyid = `${this.URL_APIBase}OfferedServices/GetByPractitionerId`;



    }
}
