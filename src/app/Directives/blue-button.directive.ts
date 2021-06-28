import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueButton]'
})
export class BlueButtonDirective {

  constructor(private elementRef :ElementRef) {
    debugger;
this.elementRef.nativeElement.style.backgroundColor ="red";
this.elementRef.nativeElement.style.width = "150px";
   }
   @HostListener('mouseover') onMouseOver() {
    // this.ChangeBgColor('red');
    // alert("mouse over");
    this.elementRef.nativeElement.style.backgroundColor ="Green";
}

}
