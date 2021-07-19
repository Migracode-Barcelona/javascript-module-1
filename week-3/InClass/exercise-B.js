const friendsInClass = ["Rana", "Fran", "Diego", "Elmira", "Bianca", "Amritpal", "Suman", "Omar", "Maxwell", "Mamadou", "Sheikh", "SaidBelal", "Houssam", "Keti", "Laura", "SaidOuhmmou"];
const newTotalFriends = friendsInClass.concat("Angelo");
console.log(newTotalFriends);
const alphabeticalOrder = newTotalFriends.sort();
console.log(alphabeticalOrder);

function nameFcn(name, array) {
    if (array.includes(name) ) {
        return `${name} is at the class with ${array}`;
    } else {
        return `${name} is not at the class with people ${array}`;
    }
}
console.log(nameFcn("Suman", newTotalFriends));
console.log(nameFcn("Harry", newTotalFriends));
