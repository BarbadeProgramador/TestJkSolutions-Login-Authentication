export async function dataValidation(user, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario es obligatorio",
        });
        return false;
    }

    if (!emailRegex.test(user)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario debe ser un correo electrónico válido",
        });
        return false;
    }

    if (!password) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "La contraseña es obligatoria",
        });
        return false;
    }

    if (password.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "La contraseña debe tener más de 6 caracteres",
        });
        return false;
    }

    return true;
}
