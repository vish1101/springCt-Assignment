import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  productArr: Iproducts[] = [];
  addCart: boolean = false;
  addCartArr: Iproducts[] = [];
  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productArr = this.productservice.getProductData();
  }
  onAddproducts(product: Iproducts) {
     this.addCartArr.push(product);
  }
  onCart() {
    this.addCart = !this.addCart
  }
  onRemove(product: Iproducts) {
    return (this.addCartArr = this.addCartArr.filter((ele) => {
      ele != product;
    }));
  }
}
