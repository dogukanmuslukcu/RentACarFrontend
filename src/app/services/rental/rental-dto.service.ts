import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from 'src/app/models/ListResponseModel';
import { RentalDto } from 'src/app/models/RentalDto';

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


}
