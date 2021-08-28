import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // @Input() backgroundColor = '';

  constructor(private element: ElementRef) { 
    // console.log('Class Directive Used!');
    // this.element.nativeElement.style.backgroundColor = 'orange';

    // NEVER DO THIS

    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);
  }


  @Input('appClass') set className(classObj: any){
    // this.element.nativeElement.style.backgroundColor = color;

    for (let key in classObj){
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
