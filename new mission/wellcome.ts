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



console.log({
    roll, firstName, isAdmin
});


// Reference type object
const user: {
    company: string,
    firstName: string,
    middleName?:string, //this is optional type
    lastName:string,
    isMarried:boolean
} = {
    company:"cht voice",
    firstName:"ratan",
    lastName:"chakma",
    isMarried: true

}