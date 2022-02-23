import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RentalDtoService } from 'src/app/services/rental/rental-dto.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  CarRentForm:FormGroup;
  CreditCardForm:FormGroup;
  carId:Number;
  isPaymentSucces:boolean

  constructor(
    private formBuilder :FormBuilder,
    private datePipe :DatePipe,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private rentalService:RentalDtoService,
    private paymentService:PaymentService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.carId = Number(params['carId']);
  })
  this.createCarRentForm();
  this.createCreditCardForm();
  }
  createCarRentForm(){
    this.CarRentForm =this.formBuilder.group({
      carId:[this.carId],
      customerId:["",Validators.required],
      rentDate:[this.datePipe.transform(new Date(),'yyyy-MM-dd'), Validators.required],
      returnDate:[this.datePipe.transform(new Date(),'yyyy-MM-dd'),Validators.required]
    })
  }

  createCreditCardForm(){
    this.CreditCardForm =this.formBuilder.group({
      NameAndSurname:["",Validators.required],
      CartNumber:["",Validators.required],
      ExpMonth:[0,Validators.required],
      ExpYear:[0,Validators.required],
      Cvc:["",Validators.required]
    })
  }
  payment(){

   if(this.CreditCardForm.valid){
    let creditModel =Object.assign({},this.CreditCardForm.value);

    this.paymentService.payment(creditModel).subscribe(response=>{
      this.toastrService.success(response.message,"Ödeme Başarıyla Tamamlandı.")
if(response.success){
  if(this.CarRentForm.valid){
    let carModel = Object.assign({},this.CarRentForm.value);
    this.rentalService.rent(carModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı!")
      this.isPaymentSucces = true;
      console.log(this.isPaymentSucces)

    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }
      }
    })

  }else{
    this.toastrService.error("Formunuz eksik veya hatalı.")

  }
}
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }
      }
    })

  }
     else{
      this.toastrService.error("Ödeme sırasında hata alındı.")
    }
  }



}
