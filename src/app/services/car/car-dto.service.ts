import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/app/models/carDto';
import { listResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
   apiUrl = "https://localhost:44309/api/cars";
  constructor(private httpClient : HttpClient) { }

  getCarDtos():Observable<listResponseModel<CarDto>>{
    let newPath =this.apiUrl+"/getCarDetails"
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosBrandId(brandId:number):Observable<listResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/getallbrandid?brandId="+brandId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosColorId(colorId:number):Observable<listResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/getallcolorid?colorId="+colorId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
}
