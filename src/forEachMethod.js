const elementoParaInserirProdutos = document.getElementById('produtos')

function exibirOsProdutosNaTela(listaDeProdutos) {
    console.log(listaDeProdutos.products)
    listaDeProdutos.products.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        <div class="card">
          <img src="${produto.image}"/>
          <p>${produto.name}</p>
          <p><b>R$${produto.price.toFixed(2)}</b></p>
          <p>Até ${produto.parcelamento}</p>
          <p>Tamanhos Disponíveis: ${produto.size}</p>
          <button class="btn-card">COMPRAR</button>
        </div>
        `
    })
}