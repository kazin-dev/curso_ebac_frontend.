const form = document.getElementById("Formulario");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const valorA = document.getElementById("campoA").value;
    const valorB = document.getElementById("campoB").value;

    if (parseFloat(valorA) < parseFloat(valorB)) {
        alert("Tudo certo!");
    } else {
        alert("Tente novamente");
    }
});
