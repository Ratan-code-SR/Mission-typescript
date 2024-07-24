var users = [];
var user1 = {
    userName: "Ratan",
    userId: 101,
    userEmail: 'ratanchakma68@gmail.com'
};
var user2 = {
    userName: "kobita",
    userId: 102,
    userEmail: 'koitachakma68@gmail.com'
};
var user3 = {
    userName: "keya",
    userId: 102,
    userEmail: 'keyachakma68@gmail.com'
};
users.push(user1);
users.push(user2);
users.push(user3);
// console.log(users);
var usersInfo = function (user) {
    console.log("userName is ".concat(user.userName, " usersId is ").concat(user.userId, " and userEmail is ").concat(user.userEmail));
};
users.forEach(function (user) { return usersInfo(user); });
