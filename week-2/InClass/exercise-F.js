
function validName(username,type ) {
    const firstLetter = username.charAt(0);
    const userLenght = username.Lenght;
    const isValidLength = userLenght >= 5 && userLenght <=10;
    const isASuperType =  type === "admin" || type ==="manager";

    if ( isASuperType || ( firstLetter === firstLetter.toUpperCase() && isValidLength ) ){
        return "Username Valid"
    } else {
        return "Username invalid";
    }
}

console.log(validName("Critiane", "admin")); //it prints: Username Valid