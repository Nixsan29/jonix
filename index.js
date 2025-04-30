const menuItems = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Pizza", price: 8.99 },
    { id: 3, name: "Pasta", price: 7.49 },
    { id: 4, name: "Salad", price: 4.99 },
  ];
  
  let cart = [];
  
  function renderMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
  
    menuItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      menu.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    cart.push(item);
    updateCartCount();
  }
  
  function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  function viewCart() {
    const cartDiv = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
  
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    totalPrice.textContent = total.toFixed(2);
    cartDiv.style.display = "block";
  }
  
  function checkout() {
    alert("Thank you for your order!");
    cart = [];
    updateCartCount();
    document.getElementById("cart").style.display = "none";
  }
  
  