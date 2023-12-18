import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repitaXVezes]',
})
export class RepitaXVezesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set repitaXVezes(repeticoes: number) {
    this.viewContainer.clear();
    for (let i = 0; i < repeticoes; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
