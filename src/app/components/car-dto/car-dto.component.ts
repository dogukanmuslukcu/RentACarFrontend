import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtos:CarDto[] = [];
  carImages:CarImage[]=[];
  colors:Color[]=[];
  brands:Brand[]=[];
  currentCarDto:CarDto;
  currentBrandId =0;
  currentColorId=0;
  constructor(
    private carDtoService : CarDtoService,
    private colorService:ColorService,
    private brandService:BrandService,
    private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
       if(params["brandId"]){
 this.getCarDtosBrandId(params["brandId"])
       }
      else if(params["colorId"]){
        this.getCarDtosColorId(params["colorId"])
      }
      else{
        this.getCarDtos()
        this.getColors();
        this.getBrands();
      }
    })

  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carDtos = response.data;
    }
    )
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  getBrands(){
this.brandService.getBrands().subscribe(response=>{
  this.brands = response.data;
})
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
  getCarDtosByBrandAndColor(){
    if(this.currentColorId ==0 &&this.currentBrandId ==0){
      this.getCarDtos()
    }
    else if(this.currentBrandId == 0){
      this.getCarDtosColorId(this.currentColorId)
    }
    else if(this.currentColorId == 0){
      this.getCarDtosBrandId(this.currentBrandId)
    }
  }
  setCurrentCarDto(carDto:CarDto){
    this.currentCarDto =carDto;
  }
  resetCurrents(){
    this.currentBrandId=0
    this.currentColorId=0
  }



}
