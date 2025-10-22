// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Botón de saludo
    const saludoBtn = document.getElementById('saludoBtn');
    saludoBtn.addEventListener('click', function() {
        alert('¡Hola Josielis! Bienvenido a la programación web 🎉');
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        
        if(nombre && email) {
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos en ${email}`);
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos');
        }
    });

    // Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});