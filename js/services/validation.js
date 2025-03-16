export async function dataValidation(user, password) {
    // Expresión regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user) {
        throw new Error("El usuario es obligatorio");
    }
    if (!emailRegex.test(user)) {
        throw new Error("El usuario debe ser un correo electrónico válido");
    }
    if (!password) {
        throw new Error("La contraseña es obligatoria");
    }
    if (password.length < 6) {
        throw new Error("La contraseña debe tener más de 6 caracteres");
    }
    return "✅ Validación exitosa";
}
