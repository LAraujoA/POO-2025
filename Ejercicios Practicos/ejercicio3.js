class registroNotas {
    constructor(titulo,detalle) {
        this.titulo = titulo;
        this.detalle = detalle;
    }

    contarPalabras(){
        let palabras = this.detalle.split(" ");
        let cantidad = palabras.length;
        console.log(`La nota de "${this.titulo}" el detalle tiene ${cantidad} palabras`)
    }
}

obj = new registroNotas ("Matematicas", "Falto detallar procesos de los ejercicios")
obj.contarPalabras();