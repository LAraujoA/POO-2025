class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
        this._id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.genero = genero;
        this.departamento = departamento;
    }

    get id() {
        return this._id;
    }

    set id(nuevoId) {
        this._id = nuevoId;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        if (typeof nuevoNombre !== "string" || nuevoNombre.length > 20) {
            throw new Error("El nombre debe ser un texto con un máximo de 20 caracteres.");
        }
        this._nombre = nuevoNombre;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(nuevoTelefono) {
        if (!/^[0-9]{8}$/.test(nuevoTelefono)) {
            throw new Error("El teléfono debe ser un número de 8 dígitos.");
        }
        this._telefono = nuevoTelefono;
    }

    get genero() {
        return this._genero === "M" ? "Masculino" : "Femenino";
    }

    set genero(nuevoGenero) {
        if (nuevoGenero !== "M" && nuevoGenero !== "F") {
            throw new Error("El género debe ser 'M' para masculino o 'F' para femenino.");
        }
        this._genero = nuevoGenero;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(nuevoDepartamento) {
        const departamentosValidos = ["Ventas", "RRHH", "Administración"];
        if (!departamentosValidos.includes(nuevoDepartamento)) {
            throw new Error("El departamento debe ser 'Ventas', 'RRHH' o 'Administración'.");
        }
        this._departamento = nuevoDepartamento;
    }

    mostrarInfo() {
        console.log(`ID: ${this._id}`);
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Teléfono: ${this._telefono}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Departamento: ${this._departamento}`);
    }
}

try {
    const persona1 = new Persona(1808, "Luis Araujo", "71485511", "M", "Ventas");
    persona1.mostrarInfo();

    persona1.id = 2;
    persona1.nombre = "Greysi Missell";
    persona1.telefono = "70900960";
    persona1.genero = "F";
    persona1.departamento = "RH";
    persona1.mostrarInfo();
} catch (error) {
    console.error("Error:", error.message);
}
