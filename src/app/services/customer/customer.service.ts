import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/models/customer/customer';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44309/api/customers/";
  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl+"getAll"
    return this.httpClient.get<listResponseModel<Customer>>(newPath)
  }

  getCustomerByUserId(userId:number):Observable<listResponseModel<Customer>>{
    let newPath = this.apiUrl+"getcustomerbyuserid?id="+userId
    return this.httpClient.get<listResponseModel<Customer>>(newPath)
  }
}
