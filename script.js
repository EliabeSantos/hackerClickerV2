const Botao = document.getElementById("Botao");
const contador = document.getElementById("contador");
const contadorPs = document.getElementById("contador-ps");
const contadorPC = document.getElementById("contador-pc");
const herosCounter = document.getElementById("player-heros-container");
const Modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const tutorialModal = document.getElementById("tutorial");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

// heros
const hero01 = document.getElementById("hero-01");
const hero01Value = document.getElementById("hero-01-value");
const hero01Quantity = document.getElementById("hero-01-quantity");
const hero01Power = document.getElementById("hero-01-power");
const hero01upgrade = document.getElementById("hero-01-upgrade");
const hero01UpgradeText = document.getElementById("hero-01-upgrade-text");
//
const hero02 = document.getElementById("hero-02");
const hero02Value = document.getElementById("hero-02-value");
const hero02Quantity = document.getElementById("hero-02-quantity");
const hero02upgrade = document.getElementById("hero-02-upgrade");
const hero02Power = document.getElementById("hero-02-power");
const hero02UpgradeText = document.getElementById("hero-02-upgrade-text");
//
const hero03 = document.getElementById("hero-03");
const hero03Value = document.getElementById("hero-03-value");
const hero03Quantity = document.getElementById("hero-03-quantity");
const hero03upgrade = document.getElementById("hero-03-upgrade");
const hero03Power = document.getElementById("hero-03-power");
const hero03UpgradeText = document.getElementById("hero-03-upgrade-text");
//
const hero04 = document.getElementById("hero-04");
const hero04Value = document.getElementById("hero-04-value");
const hero04Quantity = document.getElementById("hero-04-quantity");
const hero04upgrade = document.getElementById("hero-04-upgrade");
const hero04Power = document.getElementById("hero-04-power");
const hero04UpgradeText = document.getElementById("hero-04-upgrade-text");
//

//

let user = {
  name: "user",
  balance: 0,
  Hero01Quantity: 0,
  Hero02Quantity: 0,
  Hero03Quantity: 0,
};
if (!localStorage.getItem("user")) {
  // user = {
  //   name: localStorage.setItem("user", user.name),
  //   balance: localStorage.setItem("balance", user.balance),
  //   Hero01Quantity: localStorage.setItem("Hero01Quantity", user.Hero01Quantity),
  //   Hero02Quantity: localStorage.setItem("Hero02Quantity", user.Hero02Quantity),
  //   Hero03Quantity: localStorage.setItem("Hero03Quantity", user.Hero03Quantity),
  // };
} else {
  user = {
    name: localStorage.getItem("user"),
    balance: localStorage.getItem("balance"),
    Hero01Quantity: localStorage.getItem("Hero01Quantity"),
    Hero02Quantity: localStorage.getItem("Hero02Quantity"),
    Hero03Quantity: localStorage.getItem("Hero03Quantity"),
  };
}
//

let count = 0;
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

// Nerd Secction
let Hero01Power = 0.1;
let Hero01Quantity = 0;
let Hero01Value = 100;
let Hero01UpgradeValue = 1000;
if (user.balance !== 0) {
  Hero01Power = 0.1;
  Hero01Quantity = user.Hero01Quantity;
  Hero01Value = 100;
  Hero01UpgradeValue = 1000;
}

const Hero01Card = document.createElement("div");

setInterval(
  function () {
    hero01Value.innerHTML = parseInt(Hero01Value);
    hero01Quantity.innerHTML = Hero01Quantity;
    hero01Power.innerHTML = Hero01Power * Hero01Quantity;
    hero01UpgradeText.innerText = Hero01UpgradeValue;
    localStorage.setItem("Hero01Quantity", Hero01Quantity);
    if (Hero01Value <= count) {
      hero01.style.backgroundColor = "green";
      hero01.style.cursor = "pointer";
    } else {
      hero01.style.backgroundColor = "#707070";
      hero01upgrade.style.backgroundColor = "#707070";
      hero01.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero01() {
  if (Hero01Quantity === 0 && count >= Hero01Value) {
    herosCounter.appendChild(Hero01Card);
    let Hero01Img = document.createElement("img");
    Hero01Img.style.width = "60px";
    Hero01Img.src = "imgs/hackerIdiota.png";
    Hero01Card.appendChild(Hero01Img);
  }
  if (count >= Hero01Value) {
    Hero01Quantity++;
    count -= Hero01Value;
    Hero01Value += Hero01Value / 5;
    acumulator += Hero01Power;
  }
}

function Upgradehero01() {
  if (count >= Hero01UpgradeValue) {
    count -= Hero01UpgradeValue;
    Hero01Power += Hero01Power;
    Hero01UpgradeValue += Hero01UpgradeValue * 2;

    for (let i = 0; i < Hero01Quantity; i++) {
      acumulator += Hero01Power / 2;
    }
  }
}

setInterval(
  function () {
    if (count >= Hero01UpgradeValue) {
      hero01upgrade.style.backgroundColor = "green";
      hero01upgrade.style.cursor = "pointer";
    } else {
      hero01upgrade.style.backgroundColor = "#707070";
      hero01upgrade.style.cursor = "not-allowed";
    }
  },
  [100]
);

hero01.addEventListener("click", BuyHero01);
hero01upgrade.addEventListener("click", Upgradehero01);
//

// Hacker Secction
let Hero02Power = 1;
let Hero02Quantity = 0;
let Hero02Value = 1000;
let Hero02UpgradeValue = 10000;
const Hero02Card = document.createElement("div");

setInterval(
  function () {
    hero02Value.innerHTML = parseInt(Hero02Value);
    hero02Quantity.innerHTML = Hero02Quantity;
    hero02Power.innerHTML = Hero02Power * Hero02Quantity;
    hero02UpgradeText.innerText = Hero02UpgradeValue;

    if (Hero02Value <= count) {
      hero02.style.backgroundColor = "green";
      hero02.style.cursor = "pointer";
    } else {
      hero02.style.backgroundColor = "#707070";
      hero02.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero02() {
  if (Hero02Quantity === 0 && count >= Hero02Value) {
    herosCounter.appendChild(Hero02Card);
    let Hero02Img = document.createElement("img");
    Hero02Img.style.width = "70px";
    Hero02Img.src = "imgs/hacker-deepweb.png";
    Hero02Card.appendChild(Hero02Img);
  }
  if (count >= Hero02Value) {
    Hero02Quantity++;
    count -= Hero02Value;
    Hero02Value += Hero02Value / 5;
    acumulator += Hero02Power;
  }
}

function Upgradehero02() {
  if (count >= Hero02UpgradeValue) {
    Hero02Power += Hero02Power;
    count -= Hero02UpgradeValue;
    Hero02UpgradeValue += Hero02UpgradeValue * 2;
    for (let i = 0; i < Hero02Quantity; i++) {
      acumulator += Hero02Power / 2;
    }
  }
}
setInterval(
  function () {
    if (count >= Hero02UpgradeValue) {
      hero02upgrade.style.backgroundColor = "green";
      hero02upgrade.style.cursor = "pointer";
    } else {
      hero02upgrade.style.backgroundColor = "#707070";
      hero02upgrade.style.cursor = "not-allowed";
    }
  },
  [100]
);

hero02.addEventListener("click", BuyHero02);
hero02upgrade.addEventListener("click", Upgradehero02);
//

// Anonimous Secction
let Hero03Power = 10;
let Hero03Quantity = 0;
let Hero03Value = 10000;
let Hero03UpgradeValue = 100000;
const Hero03Card = document.createElement("div");

setInterval(
  function () {
    hero03Value.innerHTML = Hero03Value;
    hero03Quantity.innerHTML = Hero03Quantity;
    hero03Power.innerHTML = Hero03Power * Hero03Quantity;
    hero03UpgradeText.innerText = Hero03UpgradeValue;
    if (Hero03Value <= count) {
      hero03.style.backgroundColor = "green";
      hero03.style.cursor = "pointer";
    } else {
      hero03.style.backgroundColor = "#707070";
      hero03.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero03() {
  if (Hero03Quantity === 0 && count >= Hero03Value) {
    herosCounter.appendChild(Hero03Card);
    let Hero03Img = document.createElement("img");
    Hero03Img.style.width = "50px";
    Hero03Img.src = "imgs/anonymous.png";
    Hero03Card.appendChild(Hero03Img);
  }
  if (count >= Hero03Value) {
    Hero03Quantity++;
    count -= Hero03Value;
    Hero03Value += Hero03Value / 5;
    acumulator += Hero03Power;
  }
}

function Upgradehero03() {
  if (count >= Hero03UpgradeValue) {
    Hero03Power += Hero03Power;
    count -= Hero03Value;
    Hero03UpgradeValue += Hero03UpgradeValue * 2;
    for (let i = 0; i < Hero03Quantity; i++) {
      acumulator += Hero03Power / 2;
    }
  }
}
setInterval(
  function () {
    if (count >= Hero03UpgradeValue) {
      hero03upgrade.style.backgroundColor = "green";
      hero03upgrade.style.cursor = "pointer";
    } else {
      hero03upgrade.style.backgroundColor = "#707070";
      hero03upgrade.style.cursor = "not-allowed";
    }
  },
  [100]
);

hero03.addEventListener("click", BuyHero03);
hero03upgrade.addEventListener("click", Upgradehero03);

//
// Steve secction
//
let Hero04Power = 100;
let Hero04Quantity = 0;
let Hero04Value = 100000;
let Hero04UpgradeValue = 1000000;
const Hero04Card = document.createElement("div");

setInterval(
  function () {
    hero04Value.innerHTML = Hero04Value;
    hero04Quantity.innerHTML = Hero04Quantity;
    hero04Power.innerHTML = Hero04Power * Hero04Quantity;
    hero04UpgradeText.innerText = Hero04UpgradeValue;
    if (Hero04Value <= count) {
      hero04.style.backgroundColor = "green";
      hero04.style.cursor = "pointer";
    } else {
      hero04.style.backgroundColor = "#707070";
      hero04.style.cursor = "not-allowed";
    }
  },
  [100]
);

function BuyHero04() {
  if (Hero04Quantity === 0 && count >= Hero04Value) {
    herosCounter.appendChild(Hero04Card);
    let Hero04Img = document.createElement("img");
    Hero04Img.style.width = "60px";
    Hero04Img.src = "imgs/steve-jobs.png";
    Hero04Card.appendChild(Hero04Img);
  }
  if (count >= Hero04Value) {
    Hero04Quantity++;
    count -= Hero04Value;
    Hero04Value += Hero04Value / 5;
    acumulator += Hero04Power;
  }
}

function Upgradehero04() {
  if (count >= Hero04UpgradeValue) {
    Hero04Power += Hero04Power;
    count -= Hero03Value;
    Hero03UpgradeValue += Hero03UpgradeValue * 2;
    for (let i = 0; i < Hero04Quantity; i++) {
      acumulator += Hero04Power / 2;
    }
  }
}
setInterval(
  function () {
    if (count >= Hero04UpgradeValue) {
      hero04upgrade.style.backgroundColor = "green";
      hero04upgrade.style.cursor = "pointer";
    } else {
      hero04upgrade.style.backgroundColor = "#707070";
      hero04upgrade.style.cursor = "not-allowed";
    }
  },
  [100]
);

hero04.addEventListener("click", BuyHero04);
hero04upgrade.addEventListener("click", Upgradehero04);
// Heros Upgrades

//

function CloseModal() {
  Modal.classList.add("modal-invisible");
}
function OpenModal(x) {
  console.log(x.target.id);
  if (x.target.id === "tutorial") {
    modalTitle.innerHTML = "Tutorial";
    modalDescription.innerHTML =
      "Bem vindo ao hackerClicker V2. esse game foi feito para relembrar oque aprendi em js e ver mais claramente minha evolucao na programacao. Para jogar, basta clikcar :). jogos de click funcionam da seguinte forma.";
  } else {
    modalTitle.innerHTML = "Sei las";
  }
  Modal.classList.remove("modal-invisible");
}

closeModal.addEventListener("click", CloseModal);
Botao.addEventListener("click", addValue);
tutorialModal.addEventListener("click", OpenModal);
setInterval(
  function () {
    user.balance = count;
    localStorage.setItem("balance", count);
    contador.innerHTML = `Dinheiro: R$ ${parseInt(count)}`;
    contadorPs.innerHTML = `Por Segundo: ${
      acumulator >= 100
        ? acumulator.toString().split(".")[1]
          ? ` ${acumulator.toString().split(".")[0]},${acumulator
              .toString()
              .split(".")[1]
              .slice(0, 3)}`
          : acumulator
        : parseFloat(acumulator).toString().slice(0, 4)
    }`;
    contadorPC.innerHTML = `Por Click: ${click}`;
  },
  [1]
);

const popUp = document.createElement("div");

// Testar criar pop-up sem lib

// function MyTeste(e) {
//   console.log(e.screenX);
//   popUp.style.position = "fixed";
//   popUp.style.transition = "1s";
//   popUp.style.display = "flex";
//   popUp.style.flexDirection = "column";
//   popUp.style.alignItems = "center";
//   popUp.style.justifyContent = "center";
//   popUp.style.marginLeft = `${e.screenX}px`;
//   popUp.style.marginTop = `${e.screenY / 2}px`;
//   popUp.style.width = "100px";
//   popUp.style.height = "100px";
//   popUp.style.backgroundColor = "#707070";
//   popUp.innerHTML = "Valor";
//   document.body.appendChild(popUp);
//   setTimeout(
//     function () {
//       document.body.removeChild(popUp);
//     },
//     [1000]
//   );
// }

// hero01upgrade.addEventListener("mouseenter", MyTeste)(console.log("test"));
