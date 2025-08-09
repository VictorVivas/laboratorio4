const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

function validarFormulario() { 
    
    // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validar que los campos no estén vacíos e email tenga formato correcto
    if(nombre === '' || email === '' || mensaje === ''|| !email.includes("@") || !email.includes(".")) { 
        alert('Por favor, complete todos los campos.');
        
    }else{
        alert('Formulario enviado con éxito.')
    }
    
    
    
    
}