const Botao = document.getElementById("Botao");
const contador = document.getElementById("contador");
const contadorPs = document.getElementById("contador-ps");

let count = 0;

let acumulator = 0;

setInterval(
  function () {
    contador.innerHTML = `Dinheiro: ${count}`;
    contadorPs.innerHTML = `D/s: ${acumulator}`;
  },
  [1]
);

setInterval(
  function () {
    count += acumulator;
  },
  [1000]
);

function addValue(x) {
  count += 1;
  return;
}

Botao.addEventListener("click", addValue);
