const numberOfStudents = 15;
const numberOfMentors = 1;
let totalNumber = numberOfStudents + numberOfMentors;

const percentageStudents = `Percentage students:  ${Math.round((numberOfStudents/totalNumber)*100)}%`;
const percentageMentors = `Percentage mentors:  ${Math.round((numberOfMentors/totalNumber)*100)}%`;

console.log(percentageStudents);
console.log(percentageMentors);
