class Infracciones {
    constructor(nombre,infraccion) {
        this.nombre = nombre;
        this.infraccion = infraccion;
    }

    llegadaTardia() {
        let monto = 1
        console.log(`El estudiante ${this.nombre} cometio la infraccion de "${this.infraccion}", Total a cancelar: $${monto}`)
    }

    caminarPasillos() {
        let monto = 3
        console.log(`El estudiante ${this.nombre} cometio la infraccion de "${this.infraccion}", Total a cancelar: $${monto}`)
    }

    noVestimenta() {
        let monto = 5
        console.log(`El estudiante ${this.nombre} cometio la infraccion de "${this.infraccion}", Total a cancelar: $${monto}`)
    }

    dañoInstalaciones() {
        let monto = 10
        console.log(`El estudiante ${this.nombre} cometio la infraccion de "${this.infraccion}", Total a cancelar: $${monto}`)
    }

}

obj = new Infracciones("Luis", "Llegada Tardia");
obj.llegadaTardia();

obj = new Infracciones("Hector", "Caminar por los pasillos en horas de clases");
obj.caminarPasillos();

obj = new Infracciones("Hodir", "No andar vestimenta apropiada");
obj.noVestimenta();

obj = new Infracciones("Rene", "No hacer uso adecuado de las instalaciones");
obj.dañoInstalaciones();