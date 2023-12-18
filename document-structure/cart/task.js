let decreaseQuantity = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let increaseQuantity = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));
let cart = document.querySelector('.cart__products');
let product = Array.from(document.querySelectorAll('.product'));
let productImage = Array.from(document.querySelectorAll('.product__image'));
let productAdd = Array.from(document.querySelectorAll('.product__add'));


decreaseQuantity.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        productQuantityValue[idx].textContent == 1 ? false : productQuantityValue[idx].textContent--;
    })
})

increaseQuantity.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        productQuantityValue[idx].textContent++;
    })
})

productAdd.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      let dataId = (product[idx].getAttribute('data-id'));
      let parentProduct = productImage[idx].closest('.product');
      let parentProductImage = parentProduct.querySelector('.product__image')
      let image = parentProductImage.getAttribute('src');
      let count = Number(productQuantityValue[idx].outerText);
      let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
      let productMatch = cartProduct.find(el => el.dataset.id == e.target.closest('.product').dataset.id);

      if(!productMatch) {
          cart.insertAdjacentHTML('beforeend', `
          <div class='cart__product' data-id=${dataId}>
            <img class='cart__product-image' src=${image}>
            <div class='cart__product-count'>${count}</div>
          </div>
          `);
        } else {
          let cartProductCount = productMatch.querySelector('.cart__product-count');
          cartProductCount.innerText = +cartProductCount.outerText + count;
        }
    })
})