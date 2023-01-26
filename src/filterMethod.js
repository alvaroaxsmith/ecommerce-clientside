const filtroPreco = document.getElementById('preco1')

filtroPreco.addEventListener('click', (evento) => {
    filtrarElementosPeloPreco(evento)
})

function filtrarElementosPeloPreco(evento) {
    if (evento.target.checked == true) { 
    let produtosFiltrados = produtos.products.filter(produto => produto.price < 30)
    console.log(produtosFiltrados)
    } else if (evento.target.checked == false) {
    console.log(produtos)
    }
}