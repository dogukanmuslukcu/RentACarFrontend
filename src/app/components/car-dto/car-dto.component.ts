import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car/car-dto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtos:CarDto[] = []
  constructor(private carDtoService : CarDtoService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
       if(params["brandId"]){
 this.getCarDtosBrandId(params["brandId"])
       }
      else if(params["colorId"]){
        this.getCarDtosColorId(params["colorId"])
      }else{
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
}
