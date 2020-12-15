const form = document.getElementById('form');
const user = document.getElementById('usuario')
const password = document.getElementById('contraseña')

function processFormData(e) {
    e.preventDefault();

    if (user.value == "usuario" && password.value == "contraseña") {
        console.log("Usted se loguio");
    } else {
        console.log("Usted no se loguio");
        
    }
}

form.addEventListener('submit', processFormData);