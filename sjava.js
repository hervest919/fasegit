function showalert(){ alert("Hola, esta es una alerta");}

const form = document.getElementById('formulario');
form.addEventListener('submit', function(event)
                        {   event.preventDefault();
                            validateForm()
                        }
                    );

function validateEmail(email)
{   const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
                          
function validateForm() 
{   const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) 
    {   alert('Por favor ingrese un correo electrónico válido.');
    } else 
        {   alert('Correo electrónico enviado correctamente.');
        }
}                       