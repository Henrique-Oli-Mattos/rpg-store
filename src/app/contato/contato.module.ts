import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
//Para usar a mascara do telefone



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    //Serve para fazer a validação do campo de input (validar email por exemplo)
    ReactiveFormsModule,
    //Biblioteca da mascara

  ]
})
export class ContatoModule { }
