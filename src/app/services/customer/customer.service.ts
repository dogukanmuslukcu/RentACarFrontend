import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/models/Customer';
import { listResponseModel } from 'src/app/models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44309/api/customers/getAll";
  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<listResponseModel<Customer>> {
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl)
  }

}
