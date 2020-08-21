class Pizza{
    constructor(masa,tamano,ingredientes){
        this.masa=masa;
        this.tamano=tamano;
        this.ingredientes=ingredientes;
    }

    preparar(){
        console.log('Preparando pizza ${this.tamano},${this.masa},ingredientes: ${this.ingredientes} '
        );
        return this;
    }

    hornear(){
        console.log("La pizza esta en el horno");
        return this;
    }
    empacar(){
        console.log("Empacando la pizza...");
        console.log("Pizza lista para enviar!");
    }
}

const pizzaPolloChampiniones = new Pizza ("Masa delgada","Grande",["Queso","Pollo","Champiniones"]);

console.log(pizzaPolloChampiniones.preparar());
console.log(pizzaPolloChampiniones.hornear());
console.log(pizzaPolloChampiniones.empacar());

class Combos extends Pizza{
    constructor(combo,masa,tamano,ingredientes, bebida, postre){
        super(masa,tamano,ingredientes);
        this.combo= combo;
        this.cantidad=cantidad;
        this.bebida=bebida;
        this.postre=postre;
    }
    elegirCombo(){
        this.preparar();
        this.hornear();
        this.empacar();

        console.log('Pedido: Combo,${this.combo},${this.cantidad},Pizza ${this.masa}, ${this.ingredientes} + ${this.bebida}+ ${this.postre} ' );
        return this
    }
}
const Pedido = new Combos ('Personas', 1, 'Mediana', 'Masa tradicional', ['Queso', 'Pollo', 'Champiñones'], 'Coca-cola', 'Rollitos de caneda', 1 );
console.log(Pedido.elegirCombo());