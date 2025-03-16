import { Auth } from "./auth.js";



const form = document.getElementById("login-form");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    Auth(user, password)
    .then((response) => {  
        alert(response);
        window.location.href = "pages/landing.html";
    }	)
    .catch((error) => {
        alert(error);
    });

    

    // if (validation) {
    //     window.location.href = "pages/landing.html";
    // } else {
    //     alert("Usuario o contraseña incorrectos");
    // }
});