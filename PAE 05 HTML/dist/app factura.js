const products = [
    { name: "Bianchi Aero shell", price: 424004 },
    { name: "GIANT Revolt Advanced 1", price: 11000000 },
    { name: "Gravel Jersey Giant", price: 570000 },
    { name: "Cypress 2 Giant", price: 2800000 },
    { name: "Casco path MIPS hombre", price: 216000 }
];

function generateInvoice() {
    const invoiceElement = document.getElementById('invoice');
    invoiceElement.innerHTML = '';

    let total = 0;
    products.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${product.name} - $${product.price}</p>`;
        invoiceElement.appendChild(div);
        total += product.price;
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    invoiceElement.appendChild(totalElement);
    
}

