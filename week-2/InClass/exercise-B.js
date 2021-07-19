function boolChecker(bool) {
  if (typeof bool === Boolean ) {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

boolChecker(true);
console.log(boolChecker(true))
// 1) it is a boolean