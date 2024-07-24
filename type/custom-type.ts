// let users: object[]
// users = []

// let user1 : {name:string, id:number };
// user1 = {name:"ratan", id:101}
// users.push(user1)

// let user2 : {name:string, id:number };
// user2 = {name:"lucky", id:102}
// users.push(user2)

// let user3 : {name:string, id:number };
// user3 = {name:"ratan", id:103}
// users.push(user3)

// console.log(users)

// ==========================================
let users: object[]
users = []

type User = {name:string, id:number }
let user1 : User;
user1 = {name:"ratan", id:101}
users.push(user1)

let user2 : User;
user2 = {name:"lucky", id:102}
users.push(user2)

let user3 :User;
user3 = {name:"kobita", id:103}
users.push(user3)

// console.log(users)

// request type 
// type RequestType = "GET" | "POST";
// let getRequest : RequestType;
// getRequest = "GET"

// function requestHandler (requestType: RequestType){
// console.log(requestType);
// }

// requestHandler("GET")

type StudentName = "Ratan" | "Koa" | "Hello" | "Mike";

let nameOfStudent : StudentName;
function printStudentName (student: StudentName){
    console.log(student)
}

printStudentName("Hello")