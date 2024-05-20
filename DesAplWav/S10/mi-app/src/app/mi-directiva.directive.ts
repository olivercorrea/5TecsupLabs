import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[miDirectiva]' // antes appMiDirectiva
})
export class MiDirectivaDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('Mi directiva fue clickeada');
  }
}
