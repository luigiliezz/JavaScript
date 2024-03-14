let produtoembalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,

}
console.log(` O produto ${produtoembalado.nome}, da categoria ${produtoembalado.categoria}, pesando ${produtoembalado.peso}kg, está à venda por R$ ${produtoembalado.preco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}.`);


