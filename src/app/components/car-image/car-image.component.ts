import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageDto } from 'src/app/models/carImageDto';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { CarImageDtoService } from 'src/app/services/carImageDto/car-image-dto.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

carImages:CarImage[]=[];
carDtos:CarDto[]=[];
carImageDtos:CarImageDto[]=[];
isCarRent:boolean

  constructor(
    private carImageService:CarImageService,
    private carDtoService:CarDtoService,
    private carImageDtoService:CarImageDtoService,
     private activatedRoute :ActivatedRoute,
     private toastrService: ToastrService
     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
 if(params["carId"]){
       this.getCarImageDtoByCarId(params["carId"]);
       this.getCarDtoByCarId(params["carId"]);
     }
     else{
       this.getCarImages()
     }
   })

  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages=response.data;
    })
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
    })
  }
  getCarDtoByCarId(carId:number){
    this.carDtoService.getCarDtosByCarId(carId).subscribe(response=>{
    this.carDtos = response.data;
    this.carDtos.map(c=>c.isCarRentable?this.isCarRent=true:this.isCarRent=false)
    })
  }

  setIsCarRentable(){
    if ( this.isCarRent){
      this.isCarRent=true
      this.toastrService.success("Araç kiralanabilir");
    } else {
      this.isCarRent=false
      this.toastrService.error("Araç kiralanabilir");
    }
  }
  getCarImageDtoByCarId(carId:number){
this.carImageDtoService.getCarImageDtoByCarId(carId).subscribe(response=>{
  this.carImageDtos=response.data
})
  }

}
