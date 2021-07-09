
function checkValidity (userName, userType) {
  if (userName.length >= 5 && userName.length <= 10 && userName.chartAt(0) === userName.chartAt(0).toUpperCase()) {
    return "Username valid";
  } else if (userType == "admin" || userType == "manager") {
  return "Username valid";
  } else {
  return "Username Invalid";
  }
}
console.log(checkValidity("daniel", "manager"));

//not completed


