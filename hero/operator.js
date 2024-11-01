// learn spread operator
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var friends = ["ratan", "kobita", "tiko"];
var friends2 = ["sima", "lota", "mita"];
var allFriends = friends.push.apply(friends, friends2);
var footballPlayers = {
    side: "riyaz",
    middle: "tiku",
    back: "loki"
};
var cricketPlayers = {
    batting: "shakib",
    boller: "mahmud",
    kipping: "mira"
};
var playersList = __assign(__assign({}, footballPlayers), cricketPlayers);
console.log(playersList);
// console.log(allFriends)
// console.log(friends);
// console.log(friends2);
// learn rest operator
