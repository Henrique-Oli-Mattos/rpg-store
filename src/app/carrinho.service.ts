import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  //Criando um vetor do tipo IProdutoCarrinho e iniciando vazio
  itens: IProdutoCarrinho[] = []


  constructor() { }

  obterCarrinho(){
    //Pegando a informação do localstorage usando como chave o nome "carrinho"
    //Pegando a informação que viria em string e passando para JSON... 
    //...caso não consiga pegar um valor será considerado []
    
    this.itens = JSON.parse( localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    //Adiciona o produto passado no parametro na lista de itens
    this.itens.push(produto);
    //Adiciona o item no localstorage usando a chave carrinho...
    //...JSON.stringify transforma o JSON em uma string para passar como valor
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId : number){
    //vai salvar no itens todos os itens que passarem por esse filtro...
    //... o filtro vai deixar passar apenas aqueles que tem o id diferente do parametro de produtoId...
    //... ou seja, vai salvar todos, excluindo apenas o que foi passado no parametro, o excluindo do conjunto de itens
    this.itens = this.itens.filter(item => item.id !== produtoId);
    //Update no localstorage com apenas os valores selecionados
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = []
    localStorage.clear();
  }

}
