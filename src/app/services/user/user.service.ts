import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44309/api/users/";

  constructor(private httpClient:HttpClient) { }
  getUserByEmail(email:string):Observable<listResponseModel<User>>{
    let newPath =this.apiUrl+"getuserbymail?email="+email
    return this.httpClient.get<listResponseModel<User>>(newPath)
  }

  userUpdate(user:User){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",user)
  }
}
