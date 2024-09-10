/* 
    Il existe plusieurs types de champ qu'on peut créer avec les classes.

    Un champ peut être une propriété, une méthode, un getter, un setter, etc...
*/

/*
    1. Les champs statiques : Ils sont stockés dans la fonction constructeur de la classe, ce sont des méthodes/props utilitaires.
    Ils ne sont pas pas disponibles dans les objets créés à partir de cette classe ! 

    2. Les propriétés publiques : Elles sont ajoutées en tant que propriété à chaque instance créée à partir de la classe en question.
    On peut les créer de deux façons différentes.

    3. Les champs privés : Ils sont seulement utilisables dans les méthodes d'une instance.
*/

class Course {
    static author = "John Doe"
    school = "My School"
    #privatePrice = 55
    constructor(name, price) {
        this.name = name
        this.price = price
        //this.school = "My School"
        this.foo = function(){
            return this.#privatePrice;       
        }      
    }
    #test() {
        console.log("Private method");        
    }
    getPrivate(){
        this.#test()
        return this.#privatePrice;        
    }
}
console.log(Course);

const JSCourse = new Course("JS AZ", 40)
console.log(JSCourse);
console.log(JSCourse.getPrivate());
console.log(JSCourse.foo());
