document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const registeredUsers = [
        { username: 'usuario1', password: 'password1' },
        { username: 'usuario2', password: 'password2' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    const registerLink = document.getElementById('registerLink');

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        messageDiv.textContent = 'Acceso concedido';
        messageDiv.style.color = 'green';
        registerLink.style.display = 'none';
    } else {
        messageDiv.textContent = 'Usuario no registrado';
        messageDiv.style.color = 'red';
        registerLink.style.display = 'block';
    }
});