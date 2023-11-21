let timer = parseInt(document.getElementById("timer").innerHTML);

function countdown() {
  timer--;
  document.getElementById("timer").innerHTML = timer;

  if (timer === 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  }
}

let timerInterval = setInterval(countdown, 1000);