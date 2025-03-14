const produtos = [
    {"cod": 1, "nome": "melancia", "preco": 29.99, "estoque": 100, "fornecedor": "hortifruti"},
    {"cod": 2, "nome": "maçã", "preco": 19.00, "estoque": 300, "fornecedor": "OBA"},
    {"cod": 3, "nome": "banana", "preco": 9.00, "estoque": 240, "fornecedor": "hortifruti"},
    {"cod": 4, "nome": "morango", "preco": 31.90, "estoque": 515, "fornecedor": "hortifruti"},
    {"cod": 5, "nome": "melão", "preco": 19.99, "estoque": 440, "fornecedor": "hortifruti"},
    {"cod": 6, "nome": "uva", "preco": 21.90, "estoque": 760, "fornecedor": "OBA"},
    {"cod": 7, "nome": "manga", "preco": 8.99, "estoque": 150, "fornecedor": "hortifruti"},
    {"cod": 8, "nome": "maracujá", "preco": 18.90, "estoque": 100, "fornecedor": "OBA"},
    {"cod": 9, "nome": "ameixa", "preco": 9.99, "estoque": 250, "fornecedor": "hortifruti"},
    {"cod": 10, "nome": "pêssego", "preco": 15.99, "estoque": 110, "fornecedor": "OBA"}
];

function gerarLinha(tamanho) {
    let linha = '';
    for (let i = 0; i < tamanho; i++) {
        linha+='-'
    }
    return linha;
}

function todosProdutos() {
    return produtos;
}

function valorProduto() {
    return produtos.filter(produto => produto.preco >= 20.00).map(produto => produto.nome);
}

function totalProduto() {
    return produtos.reduce((total, produto) => total + produto.estoque, 0)
}

function valorTotalProdutos() {
    return produtos.reduce((total, produto) => total + (produto.estoque * produto.preco), 0)
}

export default {
    gerarLinha,
    todosProdutos,
    valorProduto,
    totalProduto,
    valorTotalProdutos,
    produtos
};