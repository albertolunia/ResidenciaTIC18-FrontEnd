import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = "Pequeno teste para os títulos e pipes";
  public date = new Date();
  public pi = 3.14159265359;
 
  public jsonObj = {
    nome: 'Dener',
    sobrenome: 'Troquatte',
    idade: 30,
    endereco: {
      a1: 'São Paulo',
      a2: 'Brasil'
    }
  };
 
  public diasSemana = ['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'];

  teste = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolvida");
    }, 2000)});
    
}
