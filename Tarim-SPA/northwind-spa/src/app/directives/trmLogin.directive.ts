import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[trmLogin]'
})
export class TrmLoginDirective {

  constructor(private el:ElementRef, private renderer:Renderer) { 
   el.nativeElement.style.backgroundColor ="blue"
  }

}
