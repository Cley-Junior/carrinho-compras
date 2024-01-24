function limpar() {
    let lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
    let valor = document.getElementById("valor-total");
    valor.innerHTML = `R$0`;
}

function adicionar() {

    let quantidade = document.getElementById("quantidade").value;
    if (Number(quantidade) <= 0)
    {
        alert("Digite um valor válido no campo 'Quantidade'.");
    }else{
        let produtos = document.getElementById("produto");
        let nomeProduto = produtos.value.split("-")[0].trim();
        let valorUnit = produtos.value.split("R$")[1].trim();
        let valorTotal = Number(valorUnit) * (quantidade);

        let lista = document.getElementById("lista-produtos");

        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
    </section>`;

        let valorCarrinho = document.getElementById("valor-total");
        valorCarrinho.innerHTML = `R$${Number(valorCarrinho.innerHTML.split("R$")[1]) + valorTotal}`
    }
}