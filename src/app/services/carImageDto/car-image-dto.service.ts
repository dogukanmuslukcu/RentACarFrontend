import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageDto } from 'src/app/models/car/carImageDto';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageDtoService {

  apiUrl = "https://localhost:44309/api/cars";
  constructor(private httpClient : HttpClient) { }

  getCarImageDtos():Observable<listResponseModel<CarImageDto>>{
    let newPath =this.apiUrl+"/getcarimagedetails"
    return this.httpClient.get<listResponseModel<CarImageDto>>(newPath)
  }
  getCarImageDtoByCarId(carId:number):Observable<listResponseModel<CarImageDto>>{
    let newPath =this.apiUrl+"/getcarimagedetailbyid?id="+carId
    return this.httpClient.get<listResponseModel<CarImageDto>>(newPath)
  }
}
