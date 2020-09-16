import { Directive, ViewContainerRef, TemplateRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[libUgPageHost]'
})
export class UgPageHostDirective {

  private el: HTMLElement;

  constructor(public viewContainerRef: ViewContainerRef, el: ElementRef) {
    // console.log('viewContainerRef', viewContainerRef, el);
  }

}
