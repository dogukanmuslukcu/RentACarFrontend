import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RentalDtoService } from 'src/app/services/rental/rental-dto.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  CarRentForm:FormGroup;
carId:Number;
  constructor(
    private formBuilder :FormBuilder,
    private datePipe :DatePipe,
    private activatedRoute: ActivatedRoute,
    private rentalService:RentalDtoService,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.carId = Number(params['carId']);
  })
  this.createCarRentForm();
  }
  createCarRentForm(){
    this.CarRentForm =this.formBuilder.group({
      CarId:[this.carId],
      CustomerId:["",Validators.required],
      RentDate:[this.datePipe.transform(new Date(),'yyyy-MM-dd'), Validators.required],
      ReturnDate:[this.datePipe.transform(new Date(),'yyyy-MM-dd'),Validators.required]
    })
  }

  rent(){
 if(this.CarRentForm.valid){
      let carModel = Object.assign({},this.CarRentForm.value);
      this.rentalService.rent(carModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Ödeme adımına yönlendiriliyorsunuz.")
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }else{
      this.toastrService.error("Formunuz eksik veya hatalı.")
    }

  }
}
