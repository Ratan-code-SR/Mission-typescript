var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Hello");
};
userInfo2 = function (name, age) {
    console.log("my name is ".concat(name, ". I am ").concat(age, " years old."));
};
userInfo3 = function (name, age) {
    return "my name is ".concat(name, ". I am ").concat(age, " years old.");
};
console.log(userInfo3("Ratan", 22));
userInfo2("Ratan", 22);
userInfo1();
