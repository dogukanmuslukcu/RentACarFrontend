import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car/car-dto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtos:CarDto[] = []
  constructor(private carDtoService : CarDtoService) { }

  ngOnInit(): void {
    this.getCarDtos();
  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carDtos = response.data;
    }
    )
  }
}
