document.getElementById("formulario").onsubmit = function(event) {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value

    if (!nome || !email || !telefone || !senha) {
        alert("Preencha todos os campos!")
        event.preventDefault()
    }
};
