const Botao = document.getElementById("Botao");
const contador = document.getElementById("contador");
const contadorPs = document.getElementById("contador-ps");
const contadorPC = document.getElementById("contador-pc");

// heros
const hero01 = document.getElementById("hero-01");
const hero01Value = document.getElementById("hero-01-value");
const hero01Quantity = document.getElementById("hero-01-quantity");
//
const hero02 = document.getElementById("hero-02");
const hero02Value = document.getElementById("hero-02-value");
const hero02Quantity = document.getElementById("hero-02-quantity");

let count = 1000;
let acumulator = 0;
let click = 1;

setInterval(
  function () {
    count += acumulator / 100;
  },
  [10]
);

function addValue() {
  Botao.classList.remove("animate"); // reset animation
  void Botao.offsetWidth; // trigger reflow
  Botao.classList.add("animate"); // start animation
  count += click;
  return;
}

// Heros Secction

// Nerd Otario Secction
let Hero01Power = 0.1;
let Hero01Quantity = 0;
let Hero01Value = 100;

setInterval(
  function () {
    hero01Value.innerHTML = parseInt(Hero01Value);
    hero01Quantity.innerHTML = Hero01Quantity;
    if (Hero01Value <= count) {
      hero01.style.backgroundColor = "green";
    } else {
      hero01.style.backgroundColor = "#707070";
      hero01.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero01() {
  if (count >= Hero01Value) {
    Hero01Quantity++;
    count -= Hero01Value;
    Hero01Value += Hero01Value / 5;
    acumulator += Hero01Power;
  }
}

hero01.addEventListener("click", BuyHero01);
//

// Hacker Secction
let Hero02Power = 1;
let Hero02Quantity = 0;
let Hero02Value = 1000;

setInterval(
  function () {
    hero02Value.innerHTML = parseInt(Hero02Value);
    hero02Quantity.innerHTML = Hero02Quantity;
    if (Hero02Value <= count) {
      hero02.style.backgroundColor = "green";
    } else {
      hero02.style.backgroundColor = "#707070";
      hero02.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero02() {
  if (count >= Hero02Value) {
    Hero02Quantity++;
    count -= Hero02Value;
    Hero02Value += Hero02Value / 5;
    acumulator += Hero02Power;
  }
}
hero02.addEventListener("click", BuyHero02);
//

// Heros Upgrades

Botao.addEventListener("click", addValue);

setInterval(
  function () {
    contador.innerHTML = `Dinheiro: ${parseInt(count)}`;
    contadorPs.innerHTML = `Por Segundo: ${acumulator}`;
    contadorPC.innerHTML = `Por Click: ${click}`;
  },
  [1]
);
