document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;

    // Verificar si todos los campos están llenos
    if (nombre.trim() === '' || email.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        // Mostrar los valores en la consola del navegador
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Contraseña:', contraseña);

        // Mostrar alerta de registro completo
        alert('Registro completo');
        
        // Puedes agregar aquí el código para enviar los datos a un servidor
    }
});