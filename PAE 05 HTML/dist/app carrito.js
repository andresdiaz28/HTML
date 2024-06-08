document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const addButton = product.querySelector('button');
        addButton.addEventListener('click', function() {
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('.precio').innerText.replace('$', ''));
            
            // Crear un nuevo elemento de carrito
            const cartItem = document.createElement('li');
            cartItem.innerText = `${productName}: $${productPrice.toFixed(2)}`;
            
            // Botón para quitar elemento del carrito
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Quitar';
            removeButton.addEventListener('click', function() {
                cartItems.removeChild(cartItem); // Quitar elemento del carrito
                updateTotal(-productPrice); // Restar el precio del producto eliminado
            });
            cartItem.appendChild(removeButton);
            
            // Añadir elemento al carrito
            cartItems.appendChild(cartItem);
            updateTotal(productPrice); // Sumar el precio del producto añadido al total
        });
    });

    function updateTotal(price) {
        const currentTotal = parseFloat(cartTotal.innerText);
        const newTotal = (currentTotal + price).toFixed(2);
        cartTotal.innerText = newTotal;
    }
});
// Lista de productos disponibles
const products = [
    { name: "Bianchi Aero shell", price: 424004 },
    { name: "GIANT Revolt Advanced 1", price: 11000000 },
    { name: "Gravel Jersey Giant", price: 570000 },
    { name: "Cypress 2 Giant", price: 2800000 },
    { name: "Casco path MIPS hombre", price: 216000 }
];

// Carrito de compras
let cart = [];

// Función para agregar un producto al carrito
function addToCart(name) {
    const product = products.find(item => item.name === name);
    cart.push(product);
    updateCart();
}

// Función para quitar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    if (!cartItemsElement) return; // Verificar si el elemento existe

    cartItemsElement.innerHTML = '';
    
    let total = 0;
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        
        // Botón para quitar un producto del carrito
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Quitar';
        removeButton.addEventListener('click', () => removeFromCart(index));
        
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
        
        total += product.price;
    });
    
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) { // Verificar si el elemento existe
        cartTotalElement.textContent = total.toFixed(2);
    }
}
