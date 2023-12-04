document.querySelectorAll('.font-size').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelector('.font-size_active').classList.remove('font-size_active');
      item.classList.add('font-size_active');
  
      let book = document.getElementById('book');
      book.classList.remove('book_fs-big', 'book_fs-small');
      let fontSize = item.dataset.size;
      if (fontSize === 'big') {
        book.classList.add('book_fs-big');
      } else if (fontSize === 'small') {
        book.classList.add('book_fs-small');
      }
      event.preventDefault();
    });
  });
  