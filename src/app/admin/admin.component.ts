import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iproducts } from '../data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productData!:FormGroup;
  productName!:string;
  prodDescription!:string
  price!:string
  productArr: Iproducts[] = [];
  add:boolean = false
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productData = new FormGroup({
      'productName': new FormControl(null),
      'prodDescription':new FormControl(null),
      'price': new FormControl(null)
    })
   this.productArr = this.productservice.getProductData()
    
  }
  onSubmit(p:any){
     console.log(this.productArr.push(p.value))
     this.productData.reset();
  }
  onEdit(product:Iproducts){
      localStorage.setItem("setproduct",product.id)
      this.add = true
      this.productArr.forEach(ele =>{
        if(ele === product){
          this.productName = ele.productName,
          this.prodDescription = ele.prodDescription,
          this.price = ele.price
        }
      } )
      
      
  }
  onUpdate(){
    let getId = localStorage.getItem('setproduct')
    this.productservice.getProductData().forEach(ele =>{
      if(ele.id === getId){
       ele.productName =  this.productName,
       ele.prodDescription = this.prodDescription,
       ele.price = this.price
      }
    })
  }
  onDelete(p: Iproducts){
      return this.productArr = this.productArr.filter(ele => ele != p)
  }
}
