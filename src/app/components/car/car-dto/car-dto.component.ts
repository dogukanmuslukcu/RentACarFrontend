import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarImage } from 'src/app/models/car/carImage';
import { CarDto } from 'src/app/models/car/carDto';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  routerUrl: String
  carDtos: CarDto[] = [];
  carImages: CarImage[] = [];
  colors: Color[] = [];
  brands: Brand[] = [];
  currentCarDto: CarDto
  currentBrandId = 0;
  currentColorId = 0;


  constructor(
    private carDtoService: CarDtoService,
    private colorService: ColorService,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarDtosByBrandId(params["brandId"])
      }
      else if (params["colorId"]) {
        this.getCarDtosByColorId(params["colorId"])
      }
      else if (params["colorId"], params["brandId"]) {
        this.getCarDtosByColorAndBranId(params["colorId"], params["brandId"])
      }
      else {
        this.getCarDtos()
        this.getColors();
        this.getBrands();
      }
    })

  }

  getCarDtos() {
    this.carDtoService.getCarDtos().subscribe(response => {
      this.carDtos = response.data;
    }
    )
  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }
  getCarDtosByBrandId(brandId: number) {
    this.carDtoService.getCarDtosByColorId(brandId).subscribe(response => {
      this.carDtos = response.data
    })
  }
  getCarDtosByColorId(colorId: number) {
    this.carDtoService.getCarDtosByColorId(colorId).subscribe(response => {
      this.carDtos = response.data;
    })
  }
  getCarDtosByColorAndBranId(colorId: number, brandId: number) {
    this.carDtoService.getCarDtosByColorAndBrandId(colorId, brandId).subscribe(response => {
      this.carDtos = response.data
    })
  }
  getCarDtosByBrandAndColor() {
    if (this.currentColorId == 0 && this.currentBrandId == 0) {
      this.getCarDtos()
    }
    else if (this.currentBrandId == 0) {
      this.getCarDtosByColorId(this.currentColorId)
    }
    else if (this.currentColorId == 0) {
      this.getCarDtosByColorId(this.currentBrandId)
    } else {
      this.getCarDtosByColorAndBranId(this.currentColorId, this.currentBrandId)
    }
  }

  setCurrentCarDto(carDto: CarDto) {
    this.currentCarDto = carDto;
    if (this.currentCarDto.isCarRentable == true) {
      this.toastrService.success("Araç kiralabilir.")
    } else {
      this.toastrService.error("Araç Başkası Tarafından Kiralandığı İçin Kiralanamaz.")
    }

  }


  resetCurrents() {
    this.currentBrandId = 0
    this.currentColorId = 0
  }



}
