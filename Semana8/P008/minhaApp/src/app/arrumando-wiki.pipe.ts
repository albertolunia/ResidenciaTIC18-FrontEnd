import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrumandoWiki'
})
export class ArrumandoWikiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
