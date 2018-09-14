import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
   if(!filterText) {
     return value;
   }
   return value.filter(p=>p.productName.toLocaleLowerCase()
   .indexOf(filterText.toLocaleLowerCase()) !== -1);
  }

}
