import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { listResponseModel } from 'src/app/models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44309/api/colors/getAll";
  constructor(private httpClient :HttpClient) { }

  getColors():Observable<listResponseModel<Color>>{
    return this.httpClient.get<listResponseModel<Color>>(this.apiUrl)
  }
}
