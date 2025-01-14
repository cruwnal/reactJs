


const details =[
{name:"kunal",
    age:20,
    gender:"male",
    phoneNumber:9876543210,}
,
{
    name:"subhash",
    age: 21,
    gender: "male",
    phoneNumber: 9876543210,
}
]

let ageIndex = details.findIndex(person => person.age === 21);
let nameIndex = details.findIndex(employee => employee.gender === "male");

console.log(details[ageIndex].phoneNumber);
console.log(details[nameIndex].name);
