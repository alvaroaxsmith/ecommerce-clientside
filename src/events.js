document.getElementById("open-filter").addEventListener("click", toggleFilter)
document.getElementById("close-filter").addEventListener("click", toggleFilter)
document.getElementById("open-order").addEventListener("click", toggleOrder)
document.getElementById("close-order").addEventListener("click", toggleOrder)


function toggleFilter (event){
    document.getElementById('filter').classList.toggle('inactive')
}
function toggleOrder (event){
    document.getElementById('order').classList.toggle('inactive')
}


let precos = document.getElementById('precos').addEventListener('click', (evento) => {
    mostrarPrecos(evento)
})

function mostrarPrecos(evento) {
    if (evento.target.checked == false) { 
        document.getElementById('div-precos').classList.add('padrao')  
    } else if (evento.target.checked == true) {
        document.getElementById('div-precos').classList.remove('padrao')    
    } else {

    }
}