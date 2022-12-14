import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RentalDtoService } from 'src/app/services/rental/rental-dto.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/customer/customer';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  CarRentForm: FormGroup;
  CreditCardForm: FormGroup;
  carId: number;
  customers: Customer[] = [];
  customerId: Customer;



  constructor(
    private rentalService: RentalDtoService,
    private authService: AuthService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.carId = Number(params['carId']);
    })
    this.authService.getUserDetailsFromToken();
    this.getCustomerIdByUserId()
    this.createCarRentForm();
    this.createCreditCardForm();

  }

  createCarRentForm() {

    this.CarRentForm = this.formBuilder.group({
      carId: [this.carId],
      customerId: ["", Validators.required],
      rentDate: [this.datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required],
      returnDate: [this.datePipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required]
    })
  }

  createCreditCardForm() {

    this.CreditCardForm = this.formBuilder.group({
      NameAndSurname: ["", Validators.required],
      CartNumber: ["", Validators.required],
      ExpMonth: [0, Validators.required],
      ExpYear: [0, Validators.required],
      Cvc: ["", Validators.required]
    })
  }

  payment() {
    this.CarRentForm.patchValue({ customerId: this.customerId })
    if (this.CreditCardForm.valid) {
      let creditModel = Object.assign({}, this.CreditCardForm.value);
      this.paymentService.payment(creditModel).subscribe(response => {
        this.toastrService.success(response.message, "Ödeme Başarıyla Tamamlandı.")

        if (response.success) {
          if (this.CarRentForm.valid) {
            let carModel = Object.assign({}, this.CarRentForm.value);
            this.rentalService.rent(carModel).subscribe(response => {
              this.toastrService.success(response.message, "Başarılı!")
              this.router.navigate(["payment/success"])
            }, responseError => {
              if (responseError.error.Errors.length > 0) {
                for (let i = 0; i < responseError.error.Errors.length; i++) {
                  this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
                }
              }
            })

          } else {
            this.toastrService.error("Formunuz eksik veya hatalı.")
          }
        }
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
          }
        }
      })

    }
    else {
      this.toastrService.error("Ödeme sırasında hata alındı.")
    }
  }

  getCustomerIdByUserId() {
    this.customerService.getCustomerByUserId(this.authService.decodedToken['UserId']).subscribe(response => {
      this.customers = response.data;
      let [CustomerId, companyName, userId] = Object.values<Customer>(this.customers)
      this.customerId = CustomerId;
    })
  }

}
