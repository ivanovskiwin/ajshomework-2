let button = document.getElementById("button");

async function makeApiCall(url) {
    let response = await fetch(url);
    let result = await response.json();
    let final = await result.map((person) => ({
        age: person.age,
        grade: person.averageGrade,
        city: person.city,
        firstName: person.firstName,
        gender: person.gender,
        lastName: person.lastName
    }));
    let gradeMoreThan3 = final.filter((person) => person.grade>3);
    let femaleHigherThan5 = final.filter((person) => person.grade==5 && person.gender == "Female").map((person) => person.firstName);
    let maleSkopje = final.filter((person) => person.age>18 && person.city == "Skopje").map((person) => `${person.firstName} ${person.lastName}`);
    let femaleAverageGrades = final.filter((person) => person.age>24 && person.gender == "Female").map((person) => person.grade);
    let startingWithB = final.filter((person) => person.grade>2 && person.firstName.charAt(0) == "B");
    console.log(gradeMoreThan3);
    console.log(femaleHigherThan5);
    console.log(maleSkopje);
    console.log(femaleAverageGrades);
    console.log(startingWithB);

    return final;  
    
}

button.addEventListener("click", () => {
   makeApiCall("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
}); 