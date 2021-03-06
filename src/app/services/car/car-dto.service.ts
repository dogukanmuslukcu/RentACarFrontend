import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/app/models/car/carDto';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
   apiUrl = "https://localhost:44309/api/cars";
  constructor(private httpClient : HttpClient) { }
 // https://localhost:44309/api/cars/getcardetails
  getCarDtos():Observable<listResponseModel<CarDto>>{
    let newPath =this.apiUrl+"/getcardetails"
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosByBrandId(brandId:number):Observable<listResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/getcardetailbybrandid?brandId="+brandId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosByColorId(colorId:number):Observable<listResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/getcardetailbycolorid?colorId="+colorId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosByCarId(carId:number):Observable<listResponseModel<CarDto>>{
    let newPath = this.apiUrl+"/getcardetailbyid?id="+carId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
  getCarDtosByColorAndBrandId(colorId:number,brandId:number):Observable<listResponseModel<CarDto>>{
    let newPath =this.apiUrl+"/getcardetailbycolorandbrandid?colorId="+colorId+"&brandId="+brandId
    return this.httpClient.get<listResponseModel<CarDto>>(newPath)
  }
}
