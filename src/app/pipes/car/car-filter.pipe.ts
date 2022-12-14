import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from 'src/app/models/car/carDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterText:string):CarDto[]{
    filterText = filterText.toLocaleLowerCase();
    return filterText?value.filter((c:CarDto)=>
    c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    c.modelYear.toString().indexOf(filterText)!==-1 ||
    c.dailyPrice.toString().indexOf(filterText)!=-1):value
  }

}
