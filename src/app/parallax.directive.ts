import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input() speed = 1;
  initialPosition = 0;

  constructor(private eleRef: ElementRef) {
    this.initialPosition = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event): void {
    this.eleRef.nativeElement.style.top = (this.initialPosition - (window.scrollY * this.speed)) + 'px';
  }
}
