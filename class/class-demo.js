var Users = /** @class */ (function () {
    function Users(userName, userId, age) {
        this.userName = userName;
        this.userId = userId;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, " userId: ").concat(this.userId, " age: ").concat(this.age));
    };
    return Users;
}());
var user1 = new Users("Ratan", 101, 22);
user1.display();
// class object
