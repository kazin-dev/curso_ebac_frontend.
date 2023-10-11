const form = document.getElementById("Formulario");
form.addEventListener("submit", function() {
const valorA = document.getElementById("campoA").value;
const valorB = document.getElementById("campoB").value;
if (valorA < valorB) {
    alert("tudo certo");
}else{
    alert("Tente novamente");
}
})


