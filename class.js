class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Tangile School & Collage"
    }
}

const student1 = new Student(1, "Sakib");
const student2 = new Student(2, "Upoma");
console.log(student1.name, student2.school);