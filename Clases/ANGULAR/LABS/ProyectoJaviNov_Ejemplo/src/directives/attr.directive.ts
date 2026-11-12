import { Directive, ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
    selector: '[pa-attr]',
})

export class PaAttrDirective {

    constructor(private element:ElementRef){}

    @Input("pa-attr")
    bgClass:string | null = null;

    ngOnInit(){
        this.element.nativeElement.classList.add(this.bgClass || "bg-success", "fw-bold");
    }
    
    ngOnChanges(changes: SimpleChange){
        const className = this.bgClass || "bg-success" ;
        this.element.nativeElement.classList.add("bg-success", "fw-bold");

    }
}