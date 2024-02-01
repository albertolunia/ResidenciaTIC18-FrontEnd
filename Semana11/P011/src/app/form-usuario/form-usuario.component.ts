import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  @ViewChild('formulario') Login: NgForm | undefined;

  onSubmit(){
    if(this.Login){
      let { usuario, senha, email, nomeCompleto, telefone, endereco, dataNascimento, genero, profissao } = this.Login.value;
      console.log(usuario, senha, email, nomeCompleto, telefone, endereco, dataNascimento, genero, profissao);
    }
    console.log(this.Login);
  }
}
