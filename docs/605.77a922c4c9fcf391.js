"use strict";(self.webpackChunkrpg_store_angular=self.webpackChunkrpg_store_angular||[]).push([[605],{3605:(v,u,i)=>{i.r(u),i.d(u,{CarrinhoModule:()=>x});var l=i(6019),s=i(4803),t=i(3311),d=i(2172),c=i(8651);function g(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",7),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade "),t.TgZ(9,"input",8),t.NdJ("change",function(){return t.CHM(n),t.oxw(2).calcularTotal()})("ngModelChange",function(a){return t.CHM(n).$implicit.quantidade=a}),t.qZA(),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){const h=t.CHM(n).$implicit;return t.oxw(2).removeProdutoCarrinho(h.id)}),t._UZ(11,"i",10),t.qZA(),t.qZA()}if(2&o){const n=r.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.Oqu(t.xi3(6,4,n.preco,"BRL")),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function C(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"ul"),t.YNc(2,g,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().comprar()}),t._UZ(7,"i",6),t._uU(8," Comprar"),t.qZA(),t.qZA()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("Total: ",t.xi3(5,2,n.total,"BRL")," ")}}function m(o,r){1&o&&t._uU(0,"Nenhum item foi adicionado ao carrinho")}const _=[{path:"",component:(()=>{class o{constructor(n,e){this.carrinhoService=n,this.route=e,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obterCarrinho(),this.calcularTotal()}calcularTotal(){this.total=0;for(let n of this.itensCarrinho)this.total=this.total+n.preco*n.quantidade;return this.total}removeProdutoCarrinho(n){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==n),this.carrinhoService.removerProdutoCarrinho(n),this.calcularTotal()}comprar(){alert("Parab\xe9ns, sua compra foi efetuada com sucesso!"),this.carrinhoService.limparCarrinho(),this.route.navigate(["produtos"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[1,"fa-solid","fa-basket-shopping"],["alt","",3,"src"],["type","number",3,"ngModel","change","ngModelChange"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-trash"]],template:function(n,e){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,C,9,5,"div",1),t.YNc(3,m,1,0,"ng-template",null,2,t.W1O)),2&n){const a=t.MAs(4);t.xp6(2),t.Q6J("ngIf",e.itensCarrinho.length>0)("ngIfElse",a)}},directives:[l.O5,l.sg,c.wV,c.Fj,c.JJ,c.On],pipes:[l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,f,c.u5]]}),o})()}}]);