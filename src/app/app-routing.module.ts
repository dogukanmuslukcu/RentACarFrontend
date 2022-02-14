import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CarImageComponent } from './components/car-image/car-image.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: CarDtoComponent },
  { path :"carDto/brand/:brandId" ,component:CarDtoComponent},
  { path: "carDtos" , component:CarDtoComponent},
  {path: "carDto/color/:colorId",component:CarDtoComponent},
  {path:"carDto/carImage/:carId",component:CarImageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
