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