
// SECTION LOGIN SERVICE 
export function localStorageService(user, passsword) {

    let userData = {
        user: user,
        passsword: passsword,
        token: new Date().getTime() + 30 * 60 * 1000 
    };

    localStorage.setItem('session', JSON.stringify(userData));

}




// SECTION VALIDATION ACCESS - PERSISTENCE SERVICE 

export function checkAuth() {
        // Get object LocalStorage Active
        const session = localStorage.getItem('session');

        console.log("validando auth ...");

        if (!session) {
            redirectLogin()
            return;
        }else{
            console.log("sesion Activa");
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