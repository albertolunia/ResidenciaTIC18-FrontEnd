import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickAnimation]',
})
export class ClickAnimationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.applyAnimation();
  }

  private applyAnimation() {
    // Adicione ou remova classes CSS para aplicar a animação desejada
    this.renderer.addClass(this.el.nativeElement, 'animated-class');

    // Aguarde a conclusão da animação e remova a classe para futuros cliques
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'animated-class');
    }, 20000); // Ajuste o tempo conforme necessário
  }
}
