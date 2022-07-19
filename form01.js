document.exm01.addEventListener("submit", submitListener);

function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${largura} ${altura}`;
  document.body.appendChild(eNovo);
}

function submitListener(event) {
  event.preventDefault();

  criaElemento(
    document.exm01.cor.value,
    document.exm01.largura.value,
    document.exm01.altura.value
  );

  document.exm01.reset();
}
