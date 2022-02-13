import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car-dto/car-dto.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: CarDtoComponent },
  { path :"carDto/brand/:brandId" ,component:CarDtoComponent},
  { path: "carDtos" , component:CarDtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
