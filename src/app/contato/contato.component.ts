import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  //metodo usado para agrupar os campos de contato
  formContato = this.fb.group({
    //Campo: ["VALOR INICIAL", [parametros de validação]]
    nome: ["",[
      Validators.required,
      Validators.minLength(3)
    ]],
    
    assunto: ["", [
      Validators.required,
      Validators.minLength(5)
    ]],

    telefone: ["",[
      Validators.minLength(11),
      Validators.required
    ]],

    email: ["",[
      Validators.required,
      Validators.email
    ]],

    mensagem: ["",[
      Validators.required,
      Validators.minLength(5)
    ]]

  })

  enviar(){
    alert("mensagem enviada");
    this.formContato.reset()
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
