let firstName: string = "ratan"
console.log(firstName);
let age :number = 45
// console.log(age);

// built-in data type are : number, string, boolean, void, null, undefined
// What is void data type?
// Ans: যদি কোনো কিছু রিটার্ন না করে তাকে void data টাইপ বলে ।

let studentRoll:number;
let studentFirstName: string;
let studentLastName: string;
let isStudent: boolean;
studentRoll = 45;
studentFirstName = "Ratan";
studentLastName = "Chakma";
isStudent = true;
const fullName = studentFirstName.concat(studentLastName)

// console.log(fullName.split("  "),studentRoll,isStudent);

// use of void data type
 function StudentName() {
    // console.log("Hello I am Ratan Chakma");
}
// console.log(StudentName);
// console.log(typeof(StudentName));

console.log("=================== ==================== =================");
// =================================================================

// union data type  string|number

let userId:string | number  // একের অধিক ডাটা টাইপ ব্যবহার করতে হলে এই ডাটা টাইপ ব্যবহার করতে হয়
// console.log(userId= '45');

// array data type
let studentsName: string[]
let teams: Array<string>
const result = ["ratan","kobita",'lipika']
// console.log(teams = ["ratan","hello","lik"]);
// console.log(result);





