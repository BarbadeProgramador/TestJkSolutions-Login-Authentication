import { localStorageService } from "./storage.js";
import { dataValidation } from "./validation.js";

// Users autorizados
const usersAutorized = { user: "jkTest2025@gmail.com", password: "1234567" };

export async function Auth(username, password) {
    try {
        // Validar la contraseña
        await dataValidation(password);

        // Retornar una nueva promesa con un setTimeout
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === usersAutorized.user && password === usersAutorized.password) {
                    localStorageService(username, password);
                    resolve("✅ Autenticación exitosa");
                } else {
                    reject("❌ Usuario o contraseña incorrectos");
                }
            }, 5000);
        });

    } catch (error) {
        console.error(error);
        return Promise.reject(error); // ❗ Esto permite manejar el error correctamente
    }
}
