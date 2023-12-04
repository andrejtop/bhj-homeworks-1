document.querySelectorAll('.rotator').forEach(rotator => {
    let cases = Array.from(rotator.children);
    let currentIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
    
    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % cases.length;
      cases[currentIndex].classList.add('rotator__case_active');
      cases[currentIndex].style.color = cases[currentIndex].dataset.color;
      setTimeout(rotate, cases[currentIndex].dataset.speed);
    }
    
    rotate();
  });
  
  