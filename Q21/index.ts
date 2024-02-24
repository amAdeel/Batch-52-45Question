//Q#21
/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */
type studentDetils ={
    myName:string;
    FatherName?:string;
    class?:string;
    RollNumber?:number;
}
let student1:studentDetils={
    myName:"m.Adeel",
    FatherName:"m.Ashraf",
    class:"1st year",
    RollNumber:5
}
let student2:studentDetils={
    myName:"m.Adnan",
    FatherName:"m.Ashraf",
    class:"1st year",
    RollNumber:7
}
let student3:studentDetils={
    myName:"m.Naveed",
    FatherName:"m.Ashraf",
    class:"3rd year",
    RollNumber:1
}
let student4:studentDetils={
    myName:"m.Dilawar",
    FatherName:"m.Hanif",
    class:"1st year",
    RollNumber:3
}

console.log("student1:",student1);
console.log("student2:",student2);
console.log("student3:",student3);
console.log("student4:",student4);

