const details = [
    {
        name: "kunal",
        age: 20,
        gender: "male",
        phoneNumber: 9876543210,
    },
    {
        name: "subhash",
        age: 21,
        gender: "male",
        phoneNumber: 9876543210,
    },
];

// Find the index of a person with age 21
let ageIndex = details.findIndex((person) => person.age === 21);

// Find the index of the first male employee
let nameIndex = details.findIndex((employee) => employee.gender === "male");

// Safely access the elements if the index exists
if (ageIndex !== -1) {
    console.log(details[ageIndex].phoneNumber);
}

if (nameIndex !== -1) {
    console.log(details[nameIndex].name);
}

// Use `.some()` to check if a specific phone number exists
const found = details.some((detail) => detail.phoneNumber === 9876543210);

if (found) {
    console.log("Phone number 9876543210 is found");
}

// getting the all phone number 
console.log(details.map((detail) => detail.phoneNumber));