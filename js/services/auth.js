import { localStorageService } from "./storage";
import { dataValidation } from "./validation";

// Users autorized
const usersAutorized = { 'user': 'jkTest2025@gmail.com', 'passsword': 'test2025' };


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

    setTimeout (() => {
        if (data_user === usersAutorized.user && data_passsword === usersAutorized.passsword) {

            localStorageService(user, passsword);
            return true;

        } else {
            return false;
        }
    }, 5000);
}

