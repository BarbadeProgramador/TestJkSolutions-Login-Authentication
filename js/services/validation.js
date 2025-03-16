export function dataValidation(password) {
    if (!password) {
        return "La contraseña es obligatoria";
    }
    if (password.length < 6) {
        return "La contraseña debe tener más de 6 caracteres";
    }
    return "Contraseña válida";
}
