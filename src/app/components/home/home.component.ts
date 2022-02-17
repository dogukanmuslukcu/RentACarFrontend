import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ColorService } from 'src/app/services/color/color.service';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  carDtos:CarDto[]=[];
  carImages:CarImage[]=[];
  colors:Color[]=[];
  brands:Brand[]=[];
  currentColor:Color;
  currentCarDto:CarDto;
  currentBrand :Brand;

  constructor(private carDtoService:CarDtoService,
            private carImageService:CarImageService,
            private brandService:BrandService,
            private colorService:ColorService,
            private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarImages();
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
this.getCarDtosBrandId(params["brandId"])
      }
     else if(params["colorId"]){
       this.getCarDtosColorId(params["colorId"])
     }
     else{
       this.getCarDtos()
     }
   })

  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carDtos = response.data;
    }
    )
  }
  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages=response.data;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>
      this.brands = response.data)
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>
      this.colors = response.data)
  }

  getCarDtosBrandId(brandId:number){
    this.carDtoService.getCarDtosBrandId(brandId).subscribe(response =>{
      this.carDtos = response.data
    })
   }
   getCarDtosColorId(colorId:number){
     this.carDtoService.getCarDtosColorId(colorId).subscribe(response =>{
       this.carDtos = response.data;
     })
   }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  setCurrentCarDto(carDto:CarDto){
    this.currentCarDto =carDto;
  }
  getCurrentColor(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item "
    }
  }
  getCurrentBrand(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item "
    }
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
