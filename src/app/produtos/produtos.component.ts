import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Produtos pode ser uma lista de produto ou undefined
  produtos: IProduto[] | undefined

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //A lista de produtos vai receber os valores do getAll do service declarado no constructor
    const produtos = this.produtoService.getAll();

    //metodo para ler o que está sendo passado de parametro na URL (depois do ?)
    this.route.queryParamMap.subscribe(params => {
      //Atribui na variavel constante descricao, o valor pego como parametro da URL...
      //... (se houver parametro ("descricao")?), e formata esse valor todo para minusculo
      const descricao = params.get("descricao")?.toLowerCase();

      //Se houver descrição
      if(descricao){
        //Atribui a lista de produtos, um filtro onde a descricao do produto precisa ter a descricao da URL
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return
      }
      //Se não houver descrição, produtos recebe todos os produtos normalmente
      this.produtos = produtos
    });
  }
}
