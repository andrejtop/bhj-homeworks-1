let timer = parseInt(document.getElementById("timer").innerHTML);

function countdown() {
  timer--;
  document.getElementById("timer").innerHTML = timer;

  if (timer === 0) {
    alert("Вы победили в конкурсе!");
  }
}

setInterval(countdown, 1000);