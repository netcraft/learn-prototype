function Person(name, age){
    this.name = name;
    this.age = age;

    console.log("person this: ", this);
    this.setName = function(name){
        console.log("set name: ", this)
        this.name = name;
    }
}

Person.prototype.sayMyName = function(){
    console.log("My name is: " + this.name)
}

function Samurai(swordType, name, age){
    this.sword = swordType;
    this.setName(name);
}

Samurai.prototype = new Person();

igal = new Samurai("Flaming sword of death", "Igal", 30);
console.log("igal: ", igal);