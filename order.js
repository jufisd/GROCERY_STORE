
const orders = JSON.parse(localStorage.getItem('orders')) || [];
const ordersList = document.getElementById('orders-list');

function renderOrders() {
  ordersList.innerHTML = '';

  orders.sort((a, b) => new Date(b.date) - new Date(a.date));

  orders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    const orderDate = new Date(order.date);
    const hours = orderDate.getHours();
    const minutes = orderDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedDate = `${orderDate.getDate()}/${orderDate.getMonth() + 1}/${orderDate.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    const orderHeader = document.createElement('h3');
    orderHeader.textContent = `Order placed on ${formattedDate}`;
    orderItem.appendChild(orderHeader);
    const orderCost = document.createElement('p');
    orderCost.textContent = `Total cost: ₹${order.totalCost}`;
    orderItem.appendChild(orderCost);
    const itemsList = document.createElement('ul');
    order.items.forEach(item => {
      const itemElement = document.createElement('li');
      itemElement.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
      itemsList.appendChild(itemElement);
    });
    orderItem.appendChild(itemsList);
    ordersList.appendChild(orderItem);
  });
}

renderOrders();