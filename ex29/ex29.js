const checkbox = document.getElementById('termos');
const botaoEnviar = document.getElementById('enviar');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    botaoEnviar.style.display = 'inline-block';
  } else {
    botaoEnviar.style.display = 'none';
  }
})