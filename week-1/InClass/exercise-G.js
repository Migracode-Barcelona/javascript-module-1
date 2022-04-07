const numberOfStudents = 15;

const numberofMentors = 8;

const totalNumberOfClass = numberOfStudents + numberofMentors;

const percentageOfStudents = (100 *  numberOfStudents) /totalNumberOfClass;

const percentageOfMentors = (100 *  numberofMentors) / totalNumberOfClass;

console.log("Percentage students: " + Math.round(percentageOfStudents) + "%");

console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");
