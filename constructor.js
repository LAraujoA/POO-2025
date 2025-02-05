class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        console.log(`Usuario ${this.nombre} creado.`);
    }
}

const usuario = new Usuario ("Luis", 19)