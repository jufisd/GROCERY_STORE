// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Cart data from localStorage:', cart);

const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const emptyCartMessage = document.getElementById('empty-cart-message');

function updateCartDisplay() {
  console.log('Cart data in updateCartDisplay:', cart);
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    emptyCartMessage.style.display = 'block';
    document.getElementById('checkout-link').style.display = 'none';
  } else {
    emptyCartMessage.style.display = 'none';
    document.getElementById('checkout-link').style.display = 'block';

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';

      const image = document.createElement('img');
      image.src = item.imageUrl;
      image.alt = item.name;
      cartItem.appendChild(image);

      const name = document.createElement('h3');
      name.textContent = item.name;
      cartItem.appendChild(name);

      const price = document.createElement('p');
      price.textContent = `₹${item.price} x ${item.quantity}`;
      cartItem.appendChild(price);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeFromCart(item.id);
      });
      cartItem.appendChild(removeButton);

      cartItems.appendChild(cartItem);

      total += item.price * item.quantity;
    });
  }

  totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(itemId) {
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    const item = cart[itemIndex];
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
    saveCartToLocalStorage();
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

updateCartDisplay();