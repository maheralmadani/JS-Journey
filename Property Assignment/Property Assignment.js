// Objects
// Property Assignment
// 8 min

// Once we’ve defined an object, we’re not stuck with all the properties we wrote.
// Preview: Docs Loading link description
// Objects
// are mutable meaning we can update them after we create them!

// We can use either dot notation, ., or bracket notation, [], and the assignment operator,
// = to add new key-value pairs to an object or change an existing property.

// diagram showing how an object followed by brackets ([]) with the property name as a string can be reassigned to a new value. 
// This same idea applies for accessing a property using dot notation which has the object name, followed by a dot and the name of the property

// One of two things can happen with property assignment:

//     If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
//     If there was no property with that name, a new property will be added to the object.

// It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, 
// meaning we can add new properties and change the properties that are there.

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// You can delete a property from an object with the delete operator.

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 7;
  delete spaceship['Secret Mission'];