import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao){
      //Redireciona para pagina de produtos, com os parametros descricao = this.descricao
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao} });
      return;
    }
    //Se não houver descrição direciona para pagina de produtos padrão
    this.router.navigate(["produtos"]);
  }

}
