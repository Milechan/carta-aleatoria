/* eslint-disable */
// Crea un algoritmo que genere aleatoriamente una carta en cada actualización:

// Cada vez que el sitio web se actualice, una nueva carta aleatoria debe mostrarse.

// La carta debe tener uno de los posibles palos: Corazones, Picas, Tréboles y Diamantes.

// El valor de la carta debe ser uno de los siguientes: 2 a 10, Rey, Reina, Jota o As (sin comodín).

function nuevaCarta() {
  let pinta = ["♦", "♥", "♠", "♣"];
  let numero = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  let indicePinta = Math.floor(Math.random() * pinta.length);
  let pintaSelec = pinta[indicePinta];
  let indiceNumero = Math.floor(Math.random() * numero.length);
  let numeroSelec = numero[indiceNumero];
  console.log(pintaSelec);
  console.log(numeroSelec);
  let center = document.getElementsByClassName("center");
  center.item(0).textContent = numeroSelec;
  let top = document.getElementsByClassName("top");
  top.item(0).textContent = pintaSelec;
  let bottom = document.getElementsByClassName("bottom");
  bottom.item(0).textContent = pintaSelec;
  if (pintaSelec == "♠" || pintaSelec == "♣") {
    top.item(0).style.color = "black";
    bottom.item(0).style.color = "black";
  } else {
    top.item(0).style.color = "red";
    bottom.item(0).style.color = "red";
  }
}

window.onload = function() {
  //write your code here
  nuevaCarta();
  let botonsito = document.getElementById("botonsito");
  botonsito.addEventListener("click", () => {
    nuevaCarta();
  });
};
