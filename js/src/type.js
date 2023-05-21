const texto = "Bem vindo(a) ao meu portfólio!"
const elemento = document.getElementById("p-section1")


function exibirTextoDigitado(texto, elemento) {
  let index = 0
  const velocidadeDigitacao = 70

  function digitar() {
    if (index < texto.length) {
      elemento.textContent += texto.charAt(index);
      index++;
      setTimeout(digitar, velocidadeDigitacao);
    }
  }

  digitar();
}

exibirTextoDigitado(texto, elemento);