/*
    1. Que va retourner honk() dans la console ?
*/

function Car(model, price){
  this.model = model 
  this.price = price 
}
Car.prototype.honk = function(){
  console.log("Honk Honk")
}

const fiat = new Car("500", 20000)

Car.prototype = {}

fiat.honk() // ??


/*
    2. Voici deux fonctions constructeurs, faites en sortes que Piano hérite du prototype d'Instrument.

    Puis créez une constante 'yamaha' contenant un nouvel objet piano.
    
    Enfin, exécutez play() à partir de yamaha afin de vérifier que l'héritage fonctionne correctement.
*/

function Instrument(){

}
Instrument.prototype.play = function(){
  console.log("Play music")
}

function Piano(type, price){
  this.type = type;
  this.price = price;
}
Piano.prototype.pressRandomKey = function(){
  console.log("Playing random note")
}
Object.setPrototypeOf(Piano.prototype, Instrument.prototype)
const yamaha = new Piano("long", 15000)
yamaha.play()