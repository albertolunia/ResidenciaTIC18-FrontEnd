import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[dataNascimento][formControlName],[dataNascimento][formControl],[dataNascimento][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DataNascimentoValidatorDirective), multi: true }
  ]
})
export class DataNascimentoValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    const dataNascimento = new Date(control.value);
    const dataAtual = new Date();
    if (dataNascimento > dataAtual) {
      return {'dataNascimentoInvalida': true};
    }
    return null;
  }
}
