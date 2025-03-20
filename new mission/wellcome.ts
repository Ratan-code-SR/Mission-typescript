// basic data type of type script
// number
let roll:Number = 23;
// string
let firstName:String = "Ratan"

// boolean data type
let isAdmin:Boolean = true;

//  array data type 
let list:number[] = [1,3,4,5]

// tuple data type
let collection: [string,number] = ["ratan", 3]

// enum Data types 
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;

// any types



console.log({roll, firstName, isAdmin});


// Reference type object
const user: {
    company: string,
    firstName: string,
    middleName?:string, //This is optional type of Typescript
    lastName:string,
    isMarried:boolean
} = {
    company:"cht voice",
    firstName:"Donald",
    lastName:"Trump",
    isMarried: true

}

console.log(user.company);
// 
// we are learning now array function
// Learning function
// Array function
// Normal function

function add (a:number,b:number){
    return a + b;
}

const result = add(3,4)
console.log(result);


//  generic constraint  with keyof operator

type Vehicle  = {
    bike: string,
    car: string,
    ship: string
}

type owner = "bike" | "car" | "ship"; // manually

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8


function findItem<T>(arr: T[], item: T): boolean {
    return arr.includes(item);
}

console.log(findItem([1, 2, 3, 4], 3));       // Output: true
console.log(findItem(["a", "b", "c"], "d"));  // Output: false


type User = {
    name: string;
    age: number;
};

function getUserName(user: User): string {
    return user.name;
}

const users = { name: "RATAN", age: 25 };
console.log(getUserName(users)); // Output: RATAN

const person: { name: string; age: number; isStudent: boolean } = {
    name: "Raton",
    age: 25,
    isStudent: true,
};

console.log(person);


const employee: {
    id: number;
    name: string;
    department: {
        name: string;
        location: string;
    };
} = {
    id: 1,
    name: "Shakya Ratan",
    department: {
        name: "IT",
        location: "Rangamati",
    },
};

console.log(employee);
