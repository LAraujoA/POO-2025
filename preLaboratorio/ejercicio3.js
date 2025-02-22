class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = this.validarPrecio(precio);
        this.cantidad = this.validarCantidad(cantidad);
    }

    validarPrecio(precio) {
        if (precio < 0) {
            throw new Error("El precio no puede ser negativo.");
        }
        return precio;
    }

    validarCantidad(cantidad) {
        if (cantidad < 0) {
            throw new Error("La cantidad no puede ser negativa.");
        }
        return cantidad;
    }

    agregarStock(cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad a agregar debe ser mayor a 0.");
        }
        this.cantidad += cantidad;
        console.log(`Se agregaron ${cantidad} unidades de ${this.nombre}. Total: ${this.cantidad}`);
    }

    comprar(cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad a comprar debe ser mayor a 0.");
        }
        if (cantidad > this.cantidad) {
            throw new Error("No hay suficiente stock disponible.");
        }
        this.cantidad -= cantidad;
        console.log(`Se compraron ${cantidad} unidades de ${this.nombre}. Stock restante: ${this.cantidad}`);
    }

    mostrarInfo() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock: ${this.cantidad} unidades`);
    }
}

try {
    const producto = new Producto("Laptop ASUS", 800, 10);
    producto.mostrarInfo();

    producto.agregarStock(5);
    producto.comprar(3);
    producto.mostrarInfo();
} catch (error) {
    console.error("Error:", error.message);
}
