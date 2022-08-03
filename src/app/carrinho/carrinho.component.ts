import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = []
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal()
  }

  calcularTotal(){
    this.total = 0;
    for(let item of this.itensCarrinho){
      this.total = this.total + (item.preco * item.quantidade)
    }
    return this.total
  }

  removeProdutoCarrinho(produtoId: number){
    //Usando o mesmo metodo para limpar o vetor local dessa classe e chamando o service para limpar do localstorage
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    alert("Parabéns, sua compra foi efetuada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.route.navigate(["produtos"])
  }

}
