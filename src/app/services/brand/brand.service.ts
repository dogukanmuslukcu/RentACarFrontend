import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';
import { Brand } from 'src/app/models/brand/brand';
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
