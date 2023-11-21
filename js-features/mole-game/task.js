const spanIdDead = document.getElementById('dead');
const spanIdLost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

const checkResult = () => {
  if (Number(spanIdLost.textContent) === 5 && Number(spanIdDead.textContent) < 10) {
    alert('Вы проиграли');
    // Сброс счетчика поражений
    spanIdLost.textContent = 0;
    spanIdDead.textContent = 0;
  } else if (Number(spanIdDead.textContent) === 10) {
    alert('Вы выиграли');
    // Сброс счетчика убитых кротов
    spanIdDead.textContent = 0;
    spanIdLost.textContent = 0;
  }
};

const handleClick = (event) => {
  const hole = event.target;
  if (hole.classList.contains('hole_has-mole')) {
    spanIdDead.textContent = Number(spanIdDead.textContent) + 1;
  } else {
    spanIdLost.textContent = Number(spanIdLost.textContent) + 1;
  }

  checkResult();
};

holes.forEach((hole) => hole.addEventListener('click', handleClick));