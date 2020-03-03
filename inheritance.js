class Parent{
    constructor(){
        this.fatherName = "Abdul Goffar";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return `${this.name}'s father name is ${this.fatherName}`;
    }
}

const baby = new Child("Toma");
const baby2 = new Child("Biva");
console.log(baby.getFullName());
console.log(baby2.getFullName());