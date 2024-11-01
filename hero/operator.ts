// learn spread operator

const friends:string[] = ["ratan","kobita","tiko"]
const friends2:string[]=["sima","lota","mita"]
const allFriends = friends.push(...friends2)

const footballPlayers = {
    side:"riyaz",
    middle:"tiku",
    back:"loki"
}
const cricketPlayers = {
    batting:"shakib",
    boller:"mahmud",
    kipping:"mira"
}
const playersList = {
    ...footballPlayers,
    ...cricketPlayers
}
console.log(playersList);
// console.log(allFriends)
// console.log(friends);
// console.log(friends2);


// learn rest operator


