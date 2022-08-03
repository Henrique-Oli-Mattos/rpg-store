import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    //a constante criada irá receber o valor desse comando...
    //...o comando em questão pega os parametros da rota
    const routeParams = this.route.snapshot.paramMap;
    //Parametro ":id" pois é como foi atribuido no produtos routing
    //Usando o number para converter o id em string para number para ser aceito...
    //... no metodo getOne() 
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("Item adicionado no carrinho");
    //Criando uma variável do tipo IProdutoCarrinho para passar os valores da classe pai + quantidade
    const produto: IProdutoCarrinho = {
      //passando todos os valores de produto (do IProduto)
      ...this.produto!,
      //passando o valor de quantidade
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
