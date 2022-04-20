// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")

  const statusCel = {
      charge: '50%',
      statusBattery: function(batteryCharge){
          console.log(`El telefono tiene ${this.charge} de carga y se encuentra ${batteryCharge}`)
      }
  }

  statusCel.statusBattery('Cargando')