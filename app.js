// Written by: Ryan Guinchard
// Written on: 08-03-2023

function getNames(people) {
  const names = people.map((person) => person.name);
  return `Names: ${names}`;
}

function getHobbies(people) {
  const hobbies = people.map((person) => person.hobbies);
  return `List of hobbies in JSON file: ${hobbies}`;
}

function getPersonDetails(people, name) {
  const person = people.find((person) => person.name === name);
  if (person) {
    const { name, age, address } = person;
    return `${name} is ${age} and lives at ${address.street}, ${address.city}, ${address.country}`;
  } else {
    return `${name} is not found in list.`;
  }
}

fetch("people.json")
  .then((response) => response.json()) // Parsing JSON response
  .then((people) => {
    people.forEach((person) => {
      console.log(person.age);
    });
    const names = getNames(people); // Function 1
    const hobbies = getHobbies(people); // Function 2
    const personDetails = getPersonDetails(people, "Michael Johnson"); // Function 3

    // Inject into HTML
    document.body.innerHTML += `
    <p>${names}</p>
    <p>${hobbies}</p>
    <p>${personDetails}</p>

    `;

    // Show in console
    console.log(names)
    console.log(hobbies)
    console.log(personDetails)
    console.log(people);




  })
  .catch((error) => {
    console.log("Error fetching people.json");
  });
