import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  constructor(private el: ElementRef<any>) {
    console.log(this.el);
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = 'red';
  }
}
