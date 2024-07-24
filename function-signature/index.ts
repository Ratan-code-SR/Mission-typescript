let userInfo1: () => void ;
let userInfo2:(name:string,age:number) => void; 
let userInfo3:(name:string,age:number) => string; 

 userInfo1 = () =>{
 console.log("Hello");
}
userInfo2 = (name,age) => {
    console.log(`my name is ${name}. I am ${age} years old.`);
}
 userInfo3 = (name,age)=>{
    return `my name is ${name}. I am ${age} years old.`;

 }
console.log(userInfo3("Ratan",22));
userInfo2("Ratan",22)
userInfo1()
