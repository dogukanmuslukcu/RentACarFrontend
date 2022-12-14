import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from 'src/app/models/ResponseModels/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { RentalDto } from 'src/app/models/rental/rentalDto';
import { ResponseModel } from 'src/app/models/ResponseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {

  apiUrl = "https://localhost:44309/api/rentals/";
  constructor(private httpClient: HttpClient) { }

  getRentalDtos():Observable<listResponseModel<RentalDto>>{
     let newpath =this.apiUrl+"getrentaldetails";
    return this.httpClient.get<listResponseModel<RentalDto>>(newpath)

  }

  rent(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental)
  }

}
