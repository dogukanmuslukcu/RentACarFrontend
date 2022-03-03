import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/car/carImage';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiurl ="https://localhost:44309/api/carImages/";
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<listResponseModel<CarImage>>{
    let newPath =this.apiurl+"getall"
    return this.httpClient.get<listResponseModel<CarImage>>(newPath)
  }
  getCarImagesByCarId(carId:number):Observable<listResponseModel<CarImage>>{
    let newPath=this.apiurl+"getimagesbycarid?carId="+carId
    return this.httpClient.get<listResponseModel<CarImage>>(newPath)
  }
}
