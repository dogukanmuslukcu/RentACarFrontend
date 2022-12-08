import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  filterTextColor = "";
  filterTextBrand = "";
  filterTextCarDto = "";

  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {


  }



  /*   getCarImagePath(carId:number){
      this.carImageService.getCarImagesCarId(carId).subscribe(response =>{

  this.carImagesforImages=response.data;
  var firstObject=response.data[0];
   this.carImagePath =firstObject.imagePath
   return this.carImagePath;

      })
    } */

}
