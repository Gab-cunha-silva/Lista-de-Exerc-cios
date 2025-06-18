function TesteDivisível() {
    const numero = parseInt(document.getElementById('num').value)
    result=''
    if (numero==0) {
        result="Zero não é divisível"
    }else if (numero%3 == 0) {
        result="É divisível"
    } else {
        result="Não é divisível"
    }
    document.getElementById('resultado').textContent = result

}