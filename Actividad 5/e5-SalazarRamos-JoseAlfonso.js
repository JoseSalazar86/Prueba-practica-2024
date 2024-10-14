class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.stock = 2000;

        if (typeof this.price !== 'number'){
            alert("Dato erroneo");
        }
    }
    sell(){
        let cantidad;

        cantidad = this.stock - this.stock;

       if (this.stock < cantidad){
           alert("La cantidad del producto es insuficiente.");
       }
       else{
           alert("Venta realizada");
       }
    }

    restock(){
        this.stock === this.stock;
        alert("Stock restrablecido")
    }
    showIngo(){
        alert(`El producto : ${name}, con el precio ${this.price}, con un stock de ${this.stock}`);
    }
}

let producto1 = new Product("Manzanas",50);
let producto2 = new Product("Sandia",20);

producto1.sell();
producto2.sell();

producto1.showIngo();
producto2.showIngo();

producto1.restock();