import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value * 1.18).toFixed(2) + "₺";
  }

}
