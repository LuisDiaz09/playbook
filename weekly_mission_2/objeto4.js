// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()

  //Otro objeto con métodos

  const cargador = {
    status: 'Conectado',
    functionCharger : function(){
        console.log(`El estado del cargador es: ${this.status}`)
    }
  }

  cargador.functionCharger()