export async function dataValidation(password) {
    if (!password) {
        throw new Error("La contraseña es obligatoria");
    }
    if (password.length < 6) {
        throw new Error("La contraseña debe tener más de 6 caracteres");
    }
    return "Contraseña válida";
}
