import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { listResponseModel } from 'src/app/models/ListResponseModel';
import { Brand } from 'src/app/models/Brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44309/api/brands/getAll";
  constructor(private httpClient : HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>{
    return this.httpClient.get<listResponseModel<Brand>>(this.apiUrl)
  }
}
