export default class Logger {
  constructor (name) {
    this.name = name
  }

  sayHello(){
    console.log(`Mi Pokemon ${this.name} te saluda!!!`)
  }

  sayMessage (message) {
    console.log(`Mi Pokemon ${this.name} dice: ${message}`)
  }
}