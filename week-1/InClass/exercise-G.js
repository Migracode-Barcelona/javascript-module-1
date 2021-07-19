const numerofstudent=45;
const numberofmentor=20;
const total =numerofstudent+numberofmentor;

const nbrstudentpermentor=Math.round(numerofstudent/numberofmentor)*100 ;
const nbrmentorperstudent=Math.round(numberofmentor/numerofstudent)*100;
console.log(nbrmentorperstudent,nbrstudentpermentor)