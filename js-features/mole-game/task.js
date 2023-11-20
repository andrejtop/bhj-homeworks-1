let holes = document.querySelectorAll('.hole');
let deadTag = document.getElementById('dead');
let lostTag = document.getElementById('lost');

for (let hole of holes) {
  hole.addEventListener('click', handleUserClick);
}

function handleUserClick(event) {
  const tag = event.target;
  const isMoleHit = tag.classList.contains('hole_has-mole');

  if (isMoleHit) {
    incrementCounter(deadTag, 10, 'Вы выиграли!');
  } else {
    incrementCounter(lostTag, 5, 'Вы проиграли!');
  }
}

function incrementCounter(counterElement, limit, winMessage) {
  let currentCount = Number(counterElement.textContent);
  currentCount++;

  if (currentCount > limit) {
    alert(winMessage);
  } else {
    counterElement.textContent = currentCount;
  }
}