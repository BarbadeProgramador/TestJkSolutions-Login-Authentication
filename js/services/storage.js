
// SECTION LOGIN SERVICE 
export function localStorageService(user, passsword) {

    let userData = {
        user: user,
        passsword: passsword,
        token: new Date().getTime() + 30 * 60 * 1000 
    };

    localStorage.setItem('session', JSON.stringify(userData));

}




// SECTION VALIDATION ACCESS SERVICE 

function checkAuth() {

    const session = localStorage.getItem('session');

    if (!session) {
        redirectLogin()
        return;
    }

    const { user, token } = JSON.parse(session);

    if (!user || new Date().getTime() > token) {
        alert("Sesión expirada. Redirigiendo...");
        localStorage.removeItem("session");
        redirectLogin();
        return;
    }

}



// SECTION LOGOUT SERVICE

function logout () {

    localStorage.removeItem("session");
    redirectLogin();
}



//REDIRECT LOGIN 
function redirectLogin(){
    window.location.href = "login.html";
}