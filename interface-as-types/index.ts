let users: {userName:string, userId:number, userEmail:string}[] = []

let user1 = {
    userName:"Ratan",
    userId: 101,
    userEmail: 'ratanchakma68@gmail.com'
}
let user2 = {
    userName:"kobita",
    userId: 102,
    userEmail: 'koitachakma68@gmail.com'
}
let user3 = {
    userName:"keya",
    userId: 102,
    userEmail: 'keyachakma68@gmail.com'
}
users.push(user1)
users.push(user2)
users.push(user3)
// console.log(users);


const usersInfo = (user:{userName:string, userId: number, userEmail: string}) => {
 console.log(`userName is ${user.userName} usersId is ${user.userId} and userEmail is ${user.userEmail}`)
}

users.forEach(user => usersInfo(user))
