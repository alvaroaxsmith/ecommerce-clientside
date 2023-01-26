let produtos = []
const endpointDB = '/assets/db/db.json'
getBuscarProdutosDB()

async function getBuscarProdutosDB() {
    const resposta = await fetch(endpointDB)
    produtos = await resposta.json()
    console.table(produtos)
    exibirOsProdutosNaTela(produtos)
}

