class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = this.validarFecha(fechaNacimiento);
    }

    validarFecha(fecha) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            throw new Error("Formato de fecha inválido. Use 'YYYY-MM-DD'.");
        }
        const fechaNacimiento = new Date(fecha);
        if (isNaN(fechaNacimiento.getTime())) {
            throw new Error("La fecha ingresada no es válida.");
        }
        return fecha;
    }

    calcularEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`Edad: ${this.calcularEdad()} años`);
    }
}

try {
    const persona = new Persona("Luis Araujo", "2006-01-28");
    persona.mostrarInfo();
} catch (error) {
    console.error("Error:", error.message);
}