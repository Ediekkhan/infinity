
const viewCart = document.getElementById('cart-modal');
const addToCartBtn = document.getElementById('addCart');
const product = document.getElementsByClassName('items');
const revealCart = document.getElementById('cart');
const hideCart= document.getElementById('closecart');  



revealCart.addEventListener('click' , showCart);
hideCart.addEventListener('click' , closeCart);

function showCart() {
  viewCart.style.visibility = 'visible';
}

function closeCart() {
  viewCart.style.visibility = 'hidden'; 
}


addToCartBtn.addEventListener('click' , function (e) {

  // if (product.length) {
  let cartItems = '';

  //   product.forEach(() => {

      cartItems = `

      <div class=" d-flex justify-content-between align-content-center p-4" id="cart-item">
      <img src="./img/gym_towel.webp" alt="gym_towel">
      <h6 class="m-5">Sweat dapp</h6>
      <p class="m-5">$45</p>

      <div class="rm my-5">
        <button class="btn btn-outline-dark">Remove</button>
      </div>
      </div>

      `
      
  //   });

    viewCart.innerHTML += cartItems;
    
  // }else {
  //   viewCart.innerText = 'No item added to cart'
  // }
  
})