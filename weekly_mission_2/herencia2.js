class Computer{
    constructor (marca, color, caracteristicas){
        this.marca = marca
        this.color = color
        this.caracteristicas = caracteristicas
    }

    get getCaracteristicas(){
        return this.caracteristicas
    }
}

const Lenovo = new Computer("Lenovo", "Negra", ["16GB RAM","500GB SSD", "GTX 1050"])
console.log(Lenovo)

class Laptop extends Computer{

}

const HP = new Laptop("HP", "Negro con rojo", ["16GB RAM","500GB SSD", "GTX 1050"])
console.log(HP)
console.log(HP.getCaracteristicas)