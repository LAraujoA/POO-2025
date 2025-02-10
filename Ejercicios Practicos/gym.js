class masa_Muscular {
    constructor(peso,estatura) {
        this.estatura = estatura;
        this.peso = peso;
    }

    indice_Masa() {
        let imc = this.peso / (this.estatura * this.estatura);
        console.log(`Su indice de masa muscular es: ${imc.toFixed(2)}`);
    }
}
obj = new masa_Muscular(75,1.65);
obj.indice_Masa();