class Users{
    // property , method, constructor
    userName: string;
    userId: number;
    age: number;

    constructor(userName:string,userId:number,age:number){
        this.userName = userName;
        this.userId = userId;
        this.age = age;
    }

    display():void{
console.log(`UserName: ${this.userName} userId: ${this.userId} age: ${this.age}`);
    }

}
let user1 = new Users("Ratan", 101, 22)
user1.display();


class Students extends Users{
department:string
constructor(userName:string, userId:number, age:number, department:string){
   super(userName,userId,age)
   this.department = department;
}

display():void{
    console.log(`UserName: ${this.userName} userId: ${this.userId} age: ${this.age} department: ${this.department}`);
        }
}
let student1 = new Students("Lucky",1002,23,"history")

student1.display()
