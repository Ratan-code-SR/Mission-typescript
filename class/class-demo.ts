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

// class object