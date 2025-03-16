import { Auth } from "./auth.js";


const form = document.getElementById("login-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    try {
        let response = await Auth(user, password);
        alert(response);
        window.location.href = "pages/landing.html";
    } catch (error) {
        alert(error);
    }
});
