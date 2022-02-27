import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken } from 'src/app/models/decodedToken';
import { LoginModel } from 'src/app/models/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44309/api/auth";
  decodedToken: DecodedToken = {Token: "", DecodedToken: "", Expiration: 0, Email: "", Name: "", Role: "", Roles: [], UserId: 0};

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService:JwtHelperService
    ) { }

  login(loginModel: LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/login", loginModel)
  }

  isAuthanticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  getUserDetailsFromToken() {
    const token: any = localStorage.getItem("token");
    const decodedToken = this.jwtHelperService.decodeToken(token);
    this.decodedToken['Token'] = localStorage.getItem("token");
    this.decodedToken['DecodedToken'] = this.jwtHelperService.decodeToken(token);
    this.decodedToken['Expiration'] = +decodedToken['exp'];
    this.decodedToken['Name'] = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.decodedToken['Role'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Roles'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Email'] = decodedToken['email'];
    this.decodedToken['UserId'] = parseInt(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
  }
}
