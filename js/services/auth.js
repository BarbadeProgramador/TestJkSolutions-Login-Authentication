import { localStorageService } from "./storage.js";
import { dataValidation } from "./validation.js";

// Users autorizados
const usersAutorized = { user: "jkTest2025@gmail.com", password: "1234567" };

export async function Auth(username, password) {
    try {
        // Validación de datos 
        let result = await dataValidation(username, password);

        if (result) {
            // Mostrar el loading
            Swal.fire({
                title: "Autenticando...",
                text: "Por favor, espera",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Simulación de una petición de autenticación
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === usersAutorized.user && password === usersAutorized.password) {
                        localStorageService(username, password);
                        
                        Swal.fire("Éxito", "✅ Autenticación exitosa", "success");
                        resolve("✅ Autenticación exitosa");
                    } else {
                        Swal.fire("Error", "❌ Usuario o contraseña incorrectos", "error");
                        reject("❌ Usuario o contraseña incorrectos");
                    }
                }, 5000);
            });
        }

    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
