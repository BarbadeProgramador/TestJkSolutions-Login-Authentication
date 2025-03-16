
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

export function checkAuth() {

        const session = localStorage.getItem('session');

        console.log("validando auth");
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

    };



// SECTION LOGOUT SERVICE

export function logout() {

    localStorage.removeItem("session");
    redirectLogin();
}



//REDIRECT LOGIN 
function redirectLogin(){
    window.location.href = "../index.html";
}