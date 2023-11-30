let startPlayer = "X";

function startGameX() {
  let playerSet = "X";
  localStorage.setItem("playerSelect", playerSet);
  window.location.href = "inGame.html";
}

function startGameO() {
  let playerSet = "O";
  localStorage.setItem("playerSelect", playerSet);
  window.location.href = "inGame.html";
}

  startPlayer = localStorage.getItem('playerSelect')

function reloadGame() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  let a1 = document.getElementById("a1");
  let b1 = document.getElementById("b1");
  let c1 = document.getElementById("c1");
  let a2 = document.getElementById("a2");
  let b2 = document.getElementById("b2");
  let c2 = document.getElementById("c2");
  let a3 = document.getElementById("a3");
  let b3 = document.getElementById("b3");
  let c3 = document.getElementById("c3");

  let cells = document.querySelectorAll(".cell");

  cells.forEach(function (i) {
    i.addEventListener("click", function (e) {
      let element = e.target.id;
      console.log(startPlayer, "startPlayer");
      console.log(element);
      if (startPlayer == "X") {
        document.getElementById(element).innerHTML =
          '<span class="material-symbols-rounded">close</span>';
        document.getElementById(element).dataset.value = "X";
        // document.getElementById(element).setAttribute("data-value", "X")
        winner(startPlayer);
        startPlayer = "O";
      } else {
        document.getElementById(element).innerHTML =
          '<span class="material-symbols-outlined">radio_button_unchecked</span>';
        document.getElementById(element).dataset.value = "O";
        // document.getElementById(element).setAttribute("data-value", "O")
        winner(startPlayer);
        startPlayer = "X";
      }
    });
  });

  var ganhadorB = document.getElementById("winType");
  var winnerInfo = localStorage.getItem("winnerType");
  ganhadorB.innerHTML = "The winner was: " + winnerInfo;

  function winner(a) {
    console.log(a);
    const cellData = [
      verify(a1.dataset.value, b1.dataset.value, c1.dataset.value),
      verify(a2.dataset.value, b2.dataset.value, c2.dataset.value),
      verify(a3.dataset.value, b3.dataset.value, c3.dataset.value),

      verify(a1.dataset.value, a2.dataset.value, a3.dataset.value),
      verify(b1.dataset.value, b2.dataset.value, b3.dataset.value),
      verify(c1.dataset.value, c2.dataset.value, c3.dataset.value),

      verify(a1.dataset.value, b2.dataset.value, c3.dataset.value),
      verify(c1.dataset.value, b2.dataset.value, a3.dataset.value),
    ];
    // console.log(cellData)
    const checkWinner = cellData.includes(true);
    if (checkWinner == true) {
      var ganhadorA = a;
      localStorage.setItem("winnerType", ganhadorA);

      window.location.href = "winner.html";
      // console.log('winnerType', ganhadorA)
    }
  }

  function verify(a, b, c) {
    if (a && b && c && a == b && b == c) {
      return true;
    } else {
      return false;
    }
  }
});
