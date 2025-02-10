class Loteria {
    constructor(numero,cantidad) {
        this.numero = numero;
        this.cantidad = cantidad;
    }

    jugar(){
        const numeroAleatorio = Math.floor(Math.random() * 100);

        console.log(`Numero elegido: ${this.numero}`);
        console.log(`Numero generado aleatoriamente: ${numeroAleatorio}`);

        if(this.numero === numeroAleatorio) {
            const premio = this.cantidad * 20;
            console.log(`Felicidades su numero acerto, premio:${premio}`);
        }else {
            console.log(`No acertaste, intenta nuevamente`)
        }
    }
}

obj = new Loteria(25,5);
obj.jugar();