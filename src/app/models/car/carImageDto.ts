import { CarImage } from "./carImage";

export interface CarImageDto{

  carId:number,
  brandName:string,
  colorName:string,
  modelYear:number,
  dailyPrice:number,
  description:String,
  imagePath:CarImage[]

}
