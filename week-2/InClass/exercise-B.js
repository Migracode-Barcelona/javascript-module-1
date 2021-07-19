function boolChecker(bool) {
  if (typeof bool === "number") {
    return "You've given me a bool, thanks!";
  } else
  return "No bool, not cool.";
}

boolChecker(true);