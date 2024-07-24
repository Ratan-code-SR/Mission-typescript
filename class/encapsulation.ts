// encapsulation 

// access modifier
// public, private, protected, readonly


 class Users{
   public userName: string;
   public userId: number;
   public age: number;
//    private age: number;

    constructor(userName:string,userId:number,age:number){
        this.userName = userName;
        this.userId = userId;
        this.age = age;
    }

     display():void {
        console.log(`UserName: ${this.userName} userId: ${this.userId} age: ${this.age}`);
     }

}

class Students extends Users{
private department:string
constructor(userName:string, userId:number, age:number, department:string){
   super(userName,userId,age)
   this.department = department;
}

display():void{
    console.log(`UserName: ${this.userName} userId: ${this.userId} age: ${this.age} department: ${this.department}`);
        }

       setStudentDepartment (department: string):void {
        this.department = department;
       } 

       getStudentDepartment():string{
        return this.department;
       }
}
let student1 = new Students("Lucky", 1002, 23, "history")
student1.setStudentDepartment("English")
// student1.display()
const result = student1.getStudentDepartment()
console.log(result);

let user1 = new Users ("ratan", 101, 22)


// console.log(user1);
