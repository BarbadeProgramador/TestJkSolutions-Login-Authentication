import { localStorageService } from "./storage.js";
import { dataValidation } from "./validation.js";

// Users autorized
const usersAutorized = { 'user': 'jkTest2025@gmail.com', 'password': '1234567' };


export function Auth(username , password) {

    let data_user = username;
    let data_passsword = password;

    // let validation = dataValidation(data_passsword);


    // switch(validation){
    //     case "contraseña obligatoria":

    //     break;

    //     case "contraseña obligatoria":

    //     break;

    //     case "contraseña valida":
        
    //     break

    // }

    return new Promise((resolve, reject) =>{

        setTimeout (() => {
            if (data_user === usersAutorized.user && data_passsword === usersAutorized.password) {
    
                localStorageService(data_user, data_passsword);
                resolve("✅ Autenticación exitosa");
    
            } else {
                reject("❌ Usuario o contraseña incorrectos");
            }
        }, 5000);

    });

}

