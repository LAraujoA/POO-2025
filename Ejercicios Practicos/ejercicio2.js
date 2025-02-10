class conversionTemperatura {
    constructor(temperatura, escala) {
        this.temperatura = temperatura;
        this.escala = escala;
    }
    
    fahrenheitaCelsius(){
        let celsius = (this.temperatura -32) / 1.8;
        console.log(`${this.temperatura} grados Fahrenheit convertidos a Celsius son:${celsius.toFixed(2)}`);
    }

    celsiusaFahrenheit() {
        let fahrenheit = (this.temperatura * 1.8) + 32;
        console.log(`${this.temperatura} grados celsius convertidos a Fahrenheit son: ${fahrenheit.toFixed(2)}`)
    }

    kelvinaFahrenheit() {
        let kelvin = (this.temperatura -273.15) * 1.8 + 32;
        console.log(`${this.temperatura} grados Kelvin convertidos a Fahrenheit son: ${kelvin.toFixed(2)}`)
    }

    kelvinaCelsius() {
        let kelvin = this.temperatura - 273.15;
        console.log(`${this.temperatura} grados Kelvin convertidos a Celsius son: ${kelvin.toFixed(2)}`)
    }

}
obj = new conversionTemperatura(60,"Fahrenheit")
obj.fahrenheitaCelsius();

obj = new conversionTemperatura(120,"Celsius")
obj.celsiusaFahrenheit();

obj = new conversionTemperatura(120,"Kelvin")
obj.kelvinaFahrenheit();

obj = new conversionTemperatura(120,"Kelvin")
obj.kelvinaCelsius();