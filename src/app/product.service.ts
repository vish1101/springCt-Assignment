import { Injectable } from '@angular/core';
import { Iproducts } from './data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  productList: Iproducts[] = [
    {
      id: '1',
      productName: 'Mobile',
      prodDescription: 'Information Of Mobile',
      price: '20000',
    },
    {
      id: '2',
      productName: 'Tab',
      prodDescription: 'Information Of Tab',
      price: '25000',
    },
    {
      id: '3',
      productName: 'T.V',
      prodDescription: 'Information Of TV',
      price: '30000',
    },
    {
      id: '4',
      productName: 'Laptop',
      prodDescription: 'Information Of Laptop',
      price: '35000',
    },
  ];
  getProductData(){
    return this.productList
  }
  getSingleProduct(p:Iproducts){
    return this.productList.forEach((ele => ele === p))
  }
}
