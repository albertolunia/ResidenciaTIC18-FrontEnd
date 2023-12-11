import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome:string = 'Arara';
  descricao:string = 'Aqui jaz uma descrição'

  url2:string = "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220"

  nome2:string = "Tamanduá"

  public getToString(): string {
    return this.nome + ' - ' + this.descricao;
  }
}
