const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
function foundName(name) {
   if (names.find(names => names === name)) {
      return "Found me!";
   } else {
      return "Havent found me :(";
   }
  }
  
  console.log(foundName("Harry"));
  console.log(foundName("James"));
  

  