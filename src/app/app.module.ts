import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDtoComponent } from './components/car/car-dto/car-dto.component';
import { RentalDtoComponent } from './components/rental/rental-dto/rental-dto.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { HomeComponent } from './components/home/home.component';
import { ColorFilterPipe } from './pipes/color/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car/car-filter.pipe';

import{ToastrModule} from "ngx-toastr";
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { LoginComponent } from './components/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDtoComponent,
    RentalDtoComponent,
    NaviComponent,
    CarImageComponent,
    HomeComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarFilterPipe,
    RentalAddComponent,
    PaymentSuccessComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
