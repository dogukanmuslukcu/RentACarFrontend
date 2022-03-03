import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car/car-dto/car-dto.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserComponent } from './components/users/user/user.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: HomeComponent },
  { path :"carDto/brand/:brandId" ,component:HomeComponent},
  { path: "carDtos" , component:CarDtoComponent},
  {path: "carDto/color/:colorId",component:HomeComponent},
  {path:"carDto/carImage/:carId",component:CarImageComponent},
  {path:"carDto/rental/:carId",component:RentalAddComponent ,canActivate:[LoginGuard]},
  {path:"payment/success",component:PaymentSuccessComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserComponent, canActivate:[LoginGuard]},
  {path:"user/update",component:UserUpdateComponent,canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
