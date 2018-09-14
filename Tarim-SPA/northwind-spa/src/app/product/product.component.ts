import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { AlertifyService } from '../commonServices/alertify.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService, 
    private alertifyService:AlertifyService,
    private activatedRoute:ActivatedRoute
    ) { }

  products:Product[] = [];
  filterText : string = "ch";

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
      //buradaki değer route ta olan değerdir.
      alert(params["categoryId"]); 
      
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
      this.products = data
    });
    })
   
  } 

  addToCart(product) {
    this.alertifyService.success(product.productName + " added successfully.");
    
  }

}
