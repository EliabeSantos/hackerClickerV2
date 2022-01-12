const Botao = document.getElementById("Botao");
const contador = document.getElementById("contador");
const contadorPs = document.getElementById("contador-ps");
const hero01 = document.getElementById("hero-01");

let count = 0;
let acumulator = 2;

setInterval(
  function () {
    contador.innerHTML = `Dinheiro: ${parseInt(count)}`;
    contadorPs.innerHTML = `D/s: ${acumulator}`;
  },
  [1]
);

setInterval(
  function () {
    count += acumulator / 100;
  },
  [10]
);

function addValue(x) {
  count += 1;
  return;
}

// Heros Secction

let Hero01Power = 1;
let Hero01Value = 100;

function MakeUpGradeHero01() {
  if (count >= Hero01Value) {
    count -= Hero01Value;
    Hero01Value = Hero01Value / 2 + Hero01Value;
    acumulator += Hero01Power;
  }
}

Botao.addEventListener("click", addValue);
hero01.addEventListener("click", MakeUpGradeHero01);
