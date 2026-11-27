import { Directive, ElementRef, EventEmitter, Attribute, Input, Output, HostBinding, HostListener, SimpleChange } from '@angular/core';
import {Product} from "../data/product.model";

@Directive({
  selector: '[pa-attr]',
})

export class PaAttrDirective {
  
  // constructor(private element:ElementRef){
  //   this.element.nativeElement.addEventListener('click', ()=>{
  //     if(this.product !== null){
  //       this.click.emit(this.product.category);
  //     }
  //   })

  // }

  @Input() isBold: boolean = false;

  @Input("pa-product")
  product:Product = new Product();

  @Output("pa-category")
  click = new EventEmitter<string>();

  // @Input("pa-attr")
  // @HostBinding("class")
  // bgClass: string | null = null;

  @HostListener("click")
  triggerCustomEvent(){
    if(this.product !== null){
      this.click.emit(this.product.category);
    }
  }

  ngOnInit(){
    this.element.nativeElement.classList.add(this.bgClass || "bg-success");
  }

  ngOnChanges(changes: SimpleChange){
    const className = this.bgClass || 'bg-success';
    
    // Solo agrega Bold si es true
    if (this.isBold){
      this.element.nativeElement.classList.add('fw-bold')
    }else{
      this.element.nativeElement.classList.remove('fw-bold')
    }
  }
}
