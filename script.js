// Step one: Creating an array of 5 student objects
const studentsList = [
    {   
        firstName: "Christiana",
        lastName: "Abdul",
        age: 18,
        score: 70,
        courses: ["Biology", "Physics", "and Chemistry."],
        gender: "Female"
    },

    {
        firstName: "Anthony",
        lastName: "Musa",
        age: 20,
        score: 85,
        courses: ["Commerce", "Economics", "and Geography."],
        gender: "Male"
    },

    {
        firstName: "Loveline",
        lastName: "Ochada",
        age: 22,
        score: 90,
        courses: ["Government", "Literature", "and Economics."],
        gender: "Female"
    },

    {
        firstName: "Heart",
        lastName: "Onate",
        age: 19,
        score: 95,
        courses: ["Mathematics", "Physics", "and Chemistry."],
        gender: "Male"
    },

    {
        firstName: "Wilson",
        lastName: "Baba",
        age: 19,
        score: 85,
        courses: ["Biology", "Physics", "and Chemistry."],
        gender: "Male"
    }
];

//Using destructuring to extract value from each student object, .map() to create new array of strings to describe each student, using
//template literal to return each students summary and description and finally, using Pronoun to create students gender.
const studentDescriptions = studentsList.map(({ firstName, lastName, age, score, courses, gender }) => {
    const pronoun = gender === "Male" ? "He" : "She";
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. ${pronoun} is taking: ${courses.join(", ")}`;
  });
  
// using .forEach to log each students details and \n to display each on a new line while usining template literal to log the output.
studentDescriptions.forEach((description, index) => {
    console.log(`Student ${index +1}:\n${description}\n`);
  });
  
