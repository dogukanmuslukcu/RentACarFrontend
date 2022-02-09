import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentACarFrontend';
  user :String ="Doğukan Muslukçu";
  product1:any={productId:1 , productName:"Bardak1" , categoryId:1, unitPrice:5}
  product2:any={productId:2 , productName:"Bardak2" , categoryId:2, unitPrice:50}
  product3:any={productId:3 , productName:"Bardak3" , categoryId:3, unitPrice:500}
  product4:any={productId:4 , productName:"Bardak4" , categoryId:4, unitPrice:5000}
  product5:any={productId:5 , productName:"Bardak5" , categoryId:5, unitPrice:50000}

  products =[
  this.product1,
  this.product2,
  this.product3,
  this.product4,
  this.product5,
  ];
}
