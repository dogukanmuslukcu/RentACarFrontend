import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: HomeComponent },
  { path :"carDto/brand/:brandId" ,component:HomeComponent},
  { path: "carDtos" , component:CarDtoComponent},
  {path: "carDto/color/:colorId",component:HomeComponent},
  {path:"carDto/carImage/:carId",component:CarImageComponent},
  {path:"carDto/rental/:carId",component:RentalAddComponent},
  {path:"payment/success",component:PaymentSuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
