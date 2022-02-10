import { Component, OnInit } from '@angular/core';
import { RentalDtoService } from 'src/app/services/rental/rental-dto.service';
import { RentalDto } from 'src/app/models/RentalDto';

@Component({
  selector: 'app-rental-dto',
  templateUrl: './rental-dto.component.html',
  styleUrls: ['./rental-dto.component.css']
})
export class RentalDtoComponent implements OnInit {


  rentalDtos : RentalDto [] = []
  constructor(private rentalDtoService : RentalDtoService) { }

  ngOnInit(): void {
   this.getRentalDtos();
  }

  getRentalDtos(){
    this.rentalDtoService.getRentalDtos().subscribe(response =>{
      this.rentalDtos = response.data ;
     })
  }
}
