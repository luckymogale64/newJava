const names = ["happy", "tshepo", "kabelo","kgmotoni"];
const product = document.getElementById("product");

for (let i = 0; i < names.length; i++ ) {
    product.innerHTML += "<br>" + names[i] + "<br>";
}