import { Auth } from "./auth";



function Login(){

    let user = document.getElementById('username').value;
    let passsword = document.getElementById('password').value;

    let validation = Auth(user, passsword);

    if (validation) {
        window.location.href = 'pages/landing.html';
    } else {
        alert('error');
    }

}