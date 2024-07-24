var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(userName, userId, age, department) {
        var _this = _super.call(this, userName, userId, age) || this;
        _this.department = department;
        return _this;
    }
    Students.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, " userId: ").concat(this.userId, " age: ").concat(this.age, " department: ").concat(this.department));
    };
    return Students;
}(Users));
var student1 = new Students("Lucky", 1002, 23, "history");
student1.display();
