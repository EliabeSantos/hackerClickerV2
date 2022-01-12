const Botao = document.getElementById("Botao");
const contador = document.getElementById("contador");
const contadorPs = document.getElementById("contador-ps");
const contadorPC = document.getElementById("contador-pc");
const hero01 = document.getElementById("hero-01");
const hero01Value = document.getElementById("hero-01-value");
const hero01Quantity = document.getElementById("hero-01-quantity");

let count = 0;
let acumulator = 2;
let click = 1;

setInterval(
  function () {
    count += acumulator / 100;
  },
  [10]
);

function addValue() {
  count += click;
  return;
}

// Heros Secction

let Hero01Power = 1;
let Hero01Quantity = 0;
let Hero01Value = 100;

function MakeUpGradeHero01() {
  if (count >= Hero01Value) {
    Hero01Quantity++;
    count -= Hero01Value;
    Hero01Value += Hero01Value / 5;
    acumulator += Hero01Power;
  }
}

Botao.addEventListener("click", addValue);
hero01.addEventListener("click", MakeUpGradeHero01);

setInterval(
  function () {
    contador.innerHTML = `Dinheiro: ${parseInt(count)}`;
    contadorPs.innerHTML = `Por Segundo: ${acumulator}`;
    contadorPC.innerHTML = `Por Click: ${click}`;
    hero01Value.innerHTML = parseInt(Hero01Value);
    hero01Quantity.innerHTML = Hero01Quantity;
  },
  [1]
);
