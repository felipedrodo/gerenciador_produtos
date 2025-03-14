// Importação das funções e informações do produto.js
import produto from "./produtos.js";

// funções
console.log("GERENCIADOR DE FRUTAS");
console.log(produto.gerarLinha(50));

console.log("Lista das frutas");
console.log(produto.todosProdutos());
console.log(produto.gerarLinha(50));

console.log("Preço maior que R$20:");
console.log(produto.valorProduto());
console.log(produto.gerarLinha(50));

console.log("Quantidade das frutas:");
console.log(produto.totalProduto());
console.log(produto.gerarLinha(50));

console.log("Valor Total do Estoque:");
console.log("R$ " + produto.valorTotalProdutos());