import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  path = "http://localhost:51233/api/products/list"
  getProducts(categoryId) : Observable<Product[]> {
    if(categoryId) {
        return this.http.get<Product[]>(this.path+"bycategory?categoryId="+categoryId);
    }
    else {
      return this.http.get<Product[]>(this.path);
    }
    

  }

}
