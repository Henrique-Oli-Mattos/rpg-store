export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number
    imagem: string;
}

//Como usa os mesmos atributos, então posso usar uma herança
export interface IProdutoCarrinho extends IProduto{
    quantidade : number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Kit de dados branco", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:31, imagem: "./assets/dados1.jpg" },
    { id: 2, descricao: "Kit de dados roxo", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:8, imagem: "./assets/dados2.jpg" },
    { id: 3, descricao: "Kit de dados vermelho", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:12, imagem: "./assets/dados3.jpg" },
    { id: 4, descricao: "Kit de dados preto", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:11, imagem: "./assets/dados4.jpg" },
    { id: 5, descricao: "Kit de dados azul", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:1, imagem: "./assets/dados5.jpg" },
    { id: 6, descricao: "Kit de dados verde", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:5, imagem: "./assets/dados6.jpg" },
    { id: 7, descricao: "Kit de dados amarelo", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:24, imagem: "./assets/dados7.jpg" },
    { id: 8, descricao: "Livro o Chamado de Cthulhu Capa dura", preco: 225.99, descricaoPreco: "À vista no PIX", quantidadeEstoque:10 ,imagem: "./assets/livro1.jpg" },
    { id: 9, descricao: "Livro de regras tormenta 20", preco: 174.70, descricaoPreco: "À vista no PIX", quantidadeEstoque:10 ,imagem: "./assets/livro2.jpg" },
    { id: 10, descricao: "Livro Dos Monstros Dungeons & Dragons", preco: 300, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/livro3.jpg" },
    { id: 11, descricao: "Livro Dungeons & Dragons", preco: 150, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/livro4.jpg" },
    { id: 12, descricao: "Torre de dados azul", preco: 180.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/torre1.jpg" },
    { id: 13, descricao: "Torre de dados verde", preco: 180.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/torre2.jpg" },
    { id: 14, descricao: "Torre de dados branca", preco: 180.90, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/torre3.jpg" },
    { id: 15, descricao: "Bandeja de dados", preco: 120.99, descricaoPreco: "À vista no PIX", quantidadeEstoque:10, imagem: "./assets/bandeja.jpg" },
]