import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //Declarando um vetor "produtos" do tipo IProduto (interface do arquivo TS de produtos)...
  //... que vai receber o valor do vetor de produtos da calsse de produtos.ts
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    //find: vai procurar um valor em produto onde o produto.id seja igual ao...
    //... produtoID do parametro
    return this.produtos.find(produto => produto.id == produtoId);
  }

}
