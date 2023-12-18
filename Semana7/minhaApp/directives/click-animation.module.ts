import { NgModule } from '@angular/core';
import { ClickAnimationDirective } from './click-animation.directive';

@NgModule({
  declarations: [ClickAnimationDirective],
  exports: [ClickAnimationDirective],
})
export class DirectivesModule {}
