
//My Object - Black Cat

import Cat from "/class.js";

const blackcat = new Cat (
    "Small",         
    "5",                 
    true,      
    "Black",        
    "Dreamies",
    "None",
    "Cuddles"
);

console.log("Initial attack method is", blackcat.Attack);                //Console Log to first check value of Attack (should be "Cuddles")
console.log("Attack method updated", blackcat.UpdateAttack("Kill"));     //Console Log to update the Attack value from "Cuddles" it to "Kill"
console.log("Updated attack method is", blackcat.Attack);                //Console Log to check the value of Attack has updated as expected

console.log("Initial age of Cat is", blackcat.Age);                      //Console Log to first check the age of the cat (should be 5)
console.log("Age of cat updated", blackcat.UpdateAge("8"));              //Console Log to update the age of the cat to 8
console.log("Updated age of Cat is", blackcat.Age);                      //Console Log to check the age of the cat has updated as expected

console.log("Is the cat angry?", blackcat.Angry);                        //Console Log to check if the cat is angry (should be TRUE)
console.log("Calming cat down", blackcat.UpdateAngry(false));            //Console Log to update the anger of the cat to FALSE
console.log("Is the cat still angry?", blackcat.Angry);                  //Console Log to check if the cat is still angry

//My Object - Ginger Cat

const gingercat = new Cat (
    "Large",         
    "5",                 
    true,          
    "Ginger",    
    "Dreamies",
    "None",
    "Cuddles"
);

console.log("The colour of the cat is", gingercat.Colour);                  //Console Log to first check value of Attack (should be "Cuddles")
console.log("Lets change that", gingercat.UpdateColour("White"));           //Console Log to update the Attack value from "Cuddles" it to "Kill"
console.log("The new colour of our cat is", gingercat.Colour);              //Console Log to check the value of Attack has updated as expected

//Template Literal to inject content into the body section of my site. 
const catlist = `
    <h2>Description of Cat</h2>
        <ul>
            <li>Height: ${gingercat.Height}</li>
            <li>Age: ${gingercat.Age}</li>
            <li>Angry: ${gingercat.Angry}</li>
            <li>Food: ${gingercat.Food}</li>
            <li>Skills: ${gingercat.Skills}</li>
            <li>Attack: ${gingercat.Attack}</li>
        </ul>
`;

const GingerCatList = document.createElement("article") // new element created and defined in JS called 'GingerCatList'
GingerCatList.classList.add("catlistdecoration") // CSS style added to element
GingerCatList.innerHTML = catlist; // Template Literal content added
const main = document.querySelector(".maincontent"); // Main variable created in JS. .maincontent pulled in for use.
main.append(GingerCatList); // new element to be added into the main const (.maincontent html div) after existing html.    

const Isaac = "Handsome";
console.log("Isaac is",Isaac);

let A = "A string of text";
console.log(typeof A); // Use this function to check the data type of a variable

let B = 5; // B variable is defined
let C = 6; // C variable is defined

console.log(`let B: ${B} (${typeof B})`); // Console log using Template Literal to find data type of B variable
console.log(`let C: ${C} (${typeof C})`); // Console log using Template Literal to find data type of C variable

// Conditional statement dependant on B & C variables matching. Console log of results.
if (B == C) {
    console.log("Match! B and C are the same value");
}
else {
    console.error("No Match: B and C are different");
}

let D = 1.5;
console.log(`let D: ${D} (${typeof D})`);

let result = B + C; // Using Math to add B & C
console.log("Result:", result); // Console log result

result = C - B; // Using Math for subtraction (result variable re-defined)
console.log("Result:", result); 

result = C / D; // Using Math for division
console.log("Result:", result); 

result = C * D; // Using Math for multiplication 
console.log("Result:", result); 

result = (B * C) / 2 ; // You can use numbers (i.e. 2), not just pre-defined variables.
console.log("Result:", result); 

result = B % D; // The remainder, after the numbers are used as a fraction. B=5 D=1.5. D goes into B 3 times, with a remainder of 0.5
console.log("Result:", result); 

result = B ** 3; // The ** means 'to the power of'. So in this case, B=5, so 5 x 5 x 5 = 125
console.log("Result:", result); 

console.log("The value of B is:", B);
result = B++  // This function incrementally increases the value of the variable
console.log("The value of B is:", B);
result = B++
console.log("The value of B is:", B);
result = B-- // This function incrementally decreases the value of the variable
console.log("The value of B is:", B);
result = B--
console.log("The value of B is:", B);

// Declare a new Array

let Item = "Boat"; // Declare a variable to use as part of array
const Collection = ["Fish", 5, Item, true]; // Declare a new Array
console.log(Collection); // Console log whole variable
console.log(Collection.length); // Console log to find the number of items in the variable
console.log(Collection[2]); // Console log to find the value of the 3rd item contained in the array
Collection[2] = "Submarine";  // Function to update the value of the 3rd item
console.log(Collection[2]); // Console log to find the value of the 3rd item contained in the array
Collection[Collection.length] = "New Item"; // Function to add a new item to the end of the Array
console.log(Collection); // Console log whole variable to check new item added

console.log(Collection.join(", ")); // Exports a string list of the Variable contents.

Collection.push(8, false, "Shark"); // Function to add a new items to the END of the Array
console.log(Collection);
Collection.unshift("Beach", 9); // Function to add a new items to the START of the Array
console.log(Collection);
Collection.shift(); // Function to remove the first item from the Array
console.log(Collection);
Collection.pop(); // Function to remove the last item from the Array
console.log(Collection);

//Appying a function to the items within my Array, to output a List to the console:
Collection.forEach(function (item) { 
    item = `<li> ${item} </li>`;  //item is def ined within function using Template Literal
    console.log(item); //Console log to check results. Needs to be inside function due to Items variable.
})

//Function to return first item from Array with more than 5 charactars
let LongItem = Collection.find(function (item) {

    if (item.length >= 5) {
        return item;
    }
})

//Console log to see results
console.log("First Item longer than 5 characters:", LongItem);


//-----------Some Basic Maths Functions-----------

//Function Declaration:
function SomeMaths (a,b) {
    let c = a + b
    return c;
};

//Function Expression:
const MoreMaths = function (a,b) {
    let c = a * b
    return c;
}

console.log(SomeMaths(5,6)); //Should return 11 (5 + 6)
console.log(MoreMaths(5,6)); //Should return 30 (5 * 6)

//Immediately Invoked Funcion Expression (IIFE):

(function(){
    let a = 2;
    let b = 6;
    let c = MoreMaths(a, b); //Calls in the Function Expression declared above
    console.log(`The sum of A & B is ${c}`); //Console log to find value of A * B (which we've assigned to be 2*6)
})();

//---------------------------------------- I am stuck!!! Why shouldn't this be in a function? ----------------------------------------

const L = 6;
const M = 5;
const N = L + M;

//Template Literal to inject content into the body section of my site. 
const FunctList = `
    <h2>Some basic caluclations. Basic JS. Basic Isaac.</h2>
        <ul>
            <li>L is ${L}</li>
            <li>M is ${M}</li>
            <li>L plus M equals ${N}</li>
        </ul>
`;

const DispFunctList = document.createElement("article") //new element created
DispFunctList.classList.add("basicmath") // CSS style added to element
DispFunctList.innerHTML = FunctList; // Template Literal content added to element
const maintwo = document.querySelector(".maincontent"); // HTML variable created in JS. .maincontent pulled in for use.
maintwo.append(DispFunctList); // new element to be added into the main const (.maincontent html div) after existing html.    

//---------------------------------------- I am stuck!!! ----------------------------------------


//-----------Using functions and temperate literal to inject content-----------//

const BigFrog = {

    title: "Big Frog",
    name: "Freddy",
    age: 5,
    size: "large",
    wives: 0,
};

const LittleFrog = {

    title: "Little Frog",
    name: "Frodo",
    age: 1,
    size: "Puny",
    wives: 9,
};

const FrogInQueston = (FrogName) => {
    const FrogDetails = document.createElement("article"); //new element created
    FrogDetails.innerHTML = `
    <h1>A description of ${FrogName.title}</H1>
        <ul>
            <Li>Name: ${FrogName.name}</li>
            <Li>Age: ${FrogName.age}</li>
            <Li>Size: ${FrogName.size}</li>
            <Li>Wives: ${FrogName.wives}</li>
            <Li>${FrogName.wives<4 ? "DAMN FROG GETS NO GIRLS" : "FROGGY GOT GAME"}</li>
        </ul>
    `; //Temperate Literal for HTML/JS mix created and used as content for variable.
    return FrogDetails;
};

//Console message dependant on number of wives frog has (this isn't best practice!!)
if(LittleFrog.wives >= 3) {
    if(LittleFrog.wives >= 5) {
        if(LittleFrog.wives >= 7) {console.log("little frog has 7 wives or more!");}
    else{console.log("little frog has 5 or 6 wives!");}}
else{console.log("little frog has 3 wives or less!"); } 
};

// //Same message, short hand - added into Temperate Literal above to display in browser
// console.log(BigFrog.wives<4 ? "DAMN FROG GETS NO GIRLS" : "FROGGY GOT GAME");


document.querySelector(".maincontent").append(FrogInQueston(LittleFrog)); // Choose which frog you wish to display (i.e. LittleFrog or BigFrog)


//-----------Building a basic Calculator-----------//


const tipCalculator = (mealcost, percentage, currency, prefix) => {

    let tip = mealcost * (percentage / 100);
    let total = mealcost + tip;
    if (prefix) {
        console.log(`
        Sum before tip:  ${currency}${mealcost}
        Tip percentage:  ${currency}${percentage}%
        Tip:             ${currency}${tip.toFixed(2)}
        Total:           ${currency}${total.toFixed(2)}
        `);
    } 
    else {
    console.log(`
    Sum before tip:  ${mealcost}${currency}
    Tip percentage:  ${percentage}%
    Tip:             ${tip.toFixed(2)}${currency}
    Total:           ${total.toFixed(2)}${currency}
    `);
    }
}

tipCalculator(35, 20, "£", true); //mealcost, percentage, currency, before/after number

tipCalculator(15, 10, "Kr", false);

//-----------Building a basic Calculator with Helper Function-----------//

//Callback receives finalTip object, creates and outputs a table:

const printHTML = (finalTip) => {

    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
    <tr>    
        <td>Sum before Tip:</td>
        <td>${finalTip.Sum}</td>
    </tr>

    <tr>    
        <td>Percentage:</td>
        <td>${finalTip.Percentage}</td>
    </tr>

    <tr>    
        <td>Tip:</td>
        <td>${finalTip.Tip}</td>
    </tr>

    <tr>    
        <td>Total:</td>
        <td>${finalTip.Total}</td>
    </tr>
`;

document.querySelector(".maincontent").append(tipTable);
tipTable.classList.add("tipstyle") 

}; 

//function to format number values into currency using Intl.NumberFormat code above taken from MDN Web Docs
const formatter = (locale, currency, value ) => {
    let formattedValue = new Intl.NumberFormat(locale, { 
        style: 'currency', 
        currency: currency 
    }).format(value);
    return formattedValue;
}

const tipCalculatortwo = (lunchcost, percent, locale, currency, callback) => {

    let tipped = lunchcost * (percent / 100);
    let totals = lunchcost + tipped;

    const finalTip = {
    Sum: formatter(locale, currency, lunchcost),
    Percentage: percent + "%",
    Tip: formatter(locale, currency, tipped),
    Total: formatter(locale, currency, totals),
    };

    callback(finalTip);
};

tipCalculatortwo(30, 5, "de-DE", "EUR", printHTML); //lunchcost, percent, locale, currency, Callback Function

//Other imput options available - i.e. "de-DE", "EUR" and "nb-NO", "NOK" and "en-US", "USD"

//Switch Expression: Absolute values

const fruit = "Banana";

switch (fruit) {
    case "Apple":   
        console.log("You've chosen an Apple!")
        break;
    case "Banana":  
        console.log("You've chosen a Bananna!")
        break;
    case "Orange":  
        console.log("You've chosen an Orange!")
        break;
    default:
        console.log(`Sorry the fruit you have selected, ${fruit}, is not available`)
}

//Switch Expression: range values

const FinalFrog = {

    title: "Final Frog",
    name: "Frieda",
    age: 8,
    size: "Medium",
    wives: 1000,
};


const ForeverFrog = () => {
    let ForeverAge = FinalFrog.age;
    let AgeDescription;

    switch (true) {
        case ForeverAge < 3:
            AgeDescription = "Baby frog!"
            break;
        case ForeverAge >= 3 && ForeverAge < 6 :
            AgeDescription = "Mid-life crisis frog!"
            break;
        case ForeverAge >= 6:
            AgeDescription = "Old timer frog"
            break;
        default:
            AgeDescription = "timeless, as no age data has been provided"
    }

    console.log(`
    Age: ${ForeverAge}
    ${FinalFrog.name} frog is a ${AgeDescription}
    `);
}

ForeverFrog();




// Standard Loop practice

//my array
const Footballers = ["Mark Hughes", "Andy Cook", "Scott Banks", "Richie Smallwood"];

//selecting empty 'article' element from HTML.
const LoopArticle = document.querySelector(".articlecontent");

// creating a new unordered list element to host array content:
let FootballListContainer = document.createElement("ul");

// For Loop
for (let i = 0; i < Footballers.length; i++) {

    //create each item of the list using loop function
    let ListFootballer = document.createElement("li");

    //pulling in the arrey to be used as content for the newly created list.
    //the exact array item to be displayed is controlled by i.
    //i is being iterated up from 0, to a maximum value of 1 less than the array length (to cover all content)
    ListFootballer.innerHTML = Footballers[i];

    //adding the list items to the unordered list created above.
    FootballListContainer.append(ListFootballer);
}

// adding the unordered list, now with contents, to the article HTML element.
LoopArticle.append(FootballListContainer);


// For-Of Loop Practice

//my array
const Books = ["Old Man & the Sea", "The Grapes of Wrath", "The Master and Margarita"];

const LoopBooks = document.querySelector (".articlecontent");
let BookListContainer = document.createElement("ul");


for (const Book of Books) {
    let BookList = document.createElement("li");
    BookList.innerHTML = Book;
    BookListContainer.append(BookList);

}

LoopBooks.append(BookListContainer);

// For-Each Loop Practice - probably the best way to deal with Arrays whilst using a loop

//My array
const Planets = ["Mars", "Saturn", "Venus", "Jupiter"];

//pulling in the html article for use in JS
const LoopPlanets = document.querySelector (".articlecontent");

//creating a new unordered list to host my loop items
let PlanetListContainer = document.createElement("ul");

//My For-Each Loop:

Planets.forEach((Planet) => {

    let PlanetList = document.createElement("li");
    PlanetList.innerHTML = Planet;
    LoopPlanets.append(PlanetList);

});

// nested objectects 
const FootballDesc = {

    Footballer1: {
        Name: "Mark Hughes",
        Type: "Manager",
        Rank: 5,
    },
    Footballer1: {
        Name: "Andy Cook",
        Type: "Striker",
        Rank: 1,
    },
    Footballer1: {
        Name: "Scott Banks",
        Type: "Winger",
        Rank: 3,
    },
};

//Basic String properties and methods:

let SomeText = "This is some Text";
const TextLength = SomeText.length;

console.log("Length of SomeText string variable is", TextLength);
console.log(SomeText[16]);

const upperText = SomeText.toUpperCase(); 
const lowerText = SomeText.toLowerCase(); 

console.log(upperText);
console.log(lowerText);

console.log(SomeText.toUpperCase());

// Locical AND (&&) OR (||) Operators



//chaining IF/ELSE expressions together - although it seems better to use a Switch Statement.

const learner = "Isaac";

if (learner == "Tom") {
    console.log("Hello Ton!");
  } else if (learner === "Isaac") {
    console.log("Hi Isaac!");
  } else {
    console.log("I don't know your name!");
  };

//combining IF Else and Switch Statements:

function sayHello(country, time) {
    let greeting;

    if (time >= 0 && time < 12){
        switch (country){

        case "France": 
        greeting = "bon matin"
        break;

        case "Mexico":
        greeting = "buenos dias"
        break;

        case "Spain":
        greeting = "buenos dias"
        break;

        default: 
        greeting = null;
    };}

    else if (time >= 12 && time < 24){
        switch (country){
        
        case "France": 
        greeting = "bon soir"
        break;

        case "Mexico":
        greeting = "buenas noches"
        break;  

        case "Spain":
        greeting = "buenas noches"
        break;

        default: 
        greeting = null;
    }
    }
    else {greeting = null;}

    return greeting;
}


//A practice at 'Mutation' of an Array:

const Fish = ['Goldfish', 'KOI', 'Ghost', 'Nemo'];
console.log(Fish);
Fish[2] = 'Shark'; // this should update Ghost to Shark
console.log(Fish);

// .length property

const Stations = ['Manchester', 'Huddersfield', 'Halifax', 'Bradford', 'Leeds'];
const LastStation = Stations[Stations.length - 1];
console.log(LastStation);

Stations.push('Liverpool'); //adds element to the end of the array
Stations.unshift('London'); //adds element to the start of the array

console.log(Stations);

Stations.pop(); //removes element from end of array
Stations.shift(); // removes element from start of array

console.log(Stations);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekend = daysOfWeek.slice(-2); //select the last two days of the week
console.log(weekend);
const workday = daysOfWeek.slice(0, 5) //select the first five days of the week
console.log(workday);

//Multi dimenional arrays, nested arrays and chaining bracket notation

const starter = ['tomato', 'cream', 'basil'];
const mainmeal = ['lemon', 'thyme', 'chicken'];
const dessert = ['apple', 'pastry', 'cream'];

const dinner = [starter, main, dessert];

console.log(dinner[0][1]);

function createToDoList() {
    const toDoList = [];

    const Plan = ['task 1', 5];
    const The = ['task 2', 10];
    const Party = ['task 3', 45];

    toDoList.push(Plan, The, Party);
}

// For Loop practice

//shows numbers 0-9, counting up
for (let i = 0; i < 10; i ++){
    console.log(i);
}

// counts up 3 times table from 3 to 30
for(let i = 3; i < 31; i +=3){
    console.log(i);
}

//counts down from 15 to 1
for(let i = 15; i > 0; i --){
    console.log(i);
}


//using a for loop on an array:

const petNames = ['Norris', 'Pixie', 'Tim', 'Poppy', 'Ruby'];
for (let i = 0; i < petNames.length ; i++){
  console.log(petNames[i]);
}

const blastOff = ['We have Lift Off!', 'One!', 'Two!', 'Three!'];
for (let i = blastOff.length-1 ; i >= 0; i--){
  console.log(blastOff[i]);
}

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// // Write your for loop below
// for (let i = 1; i > alphabet.length; i=+5){
//   alphabet[i] = toUpperCase;
// }

// const animals = ['Alligator', 'Fox', 'Armadillo', 'Tiger', 'Duckling', 'Raccoon', 'Chicken', 'Sheep', 'Dog', 'Antelope'];
// let ducklingHere;
// // Start writing your code below
// for (i = 0; i < animals.length; i++){
//   if (animals[i] == 'Duckling'){
//     ducklingHere = [i];
//   };  
  
  
//   const animals2 = ['Alligator', 'Fox', 'Armadillo', 'Tiger', 'Anteater', 'Raccoon', 'Chicken', 'Sheep', 'Dog', 'Antelope', 'Albatross', 'Cat', 'Alpaca', 'Ape', 'Anaconda'];
//   let countAnimals = 0;

//   // Start writing your code below
//   for (let i = 0; i < animals.length; i++){
//     if (animals[i].charAt(0) == 'A'){
//     countAnimals = countAnimals + 1;
//     };
//   }
// };

//Guys i'm stuck with a bit of code. I need the below function to only pull back 'serialNumbers' which are odd numbers and have are 6 digits in length.
//My attempt is below, but apparantly this isn't quite right. Can you see anything i'm missing?

function findEfficientBulbs(serialNumbers) {
    console.log(serialNumbers);
    const efficientSerialNumbers = [];

    for (let i=0; i < serialNumbers.length; i++){
        if ((serialNumbers[i].length == 6) && (serialNumbers[i] % 2 != 0)){
            efficientSerialNumbers.push(serialNumbers[i]);
        }
    }
    return efficientSerialNumbers;
}

// using the delete method on my object:

const SpaceEquipment = {
    helmet: "Extra Large",
    boots: "Size 13",
    lunch: "Sandwich"
}
console.log(SpaceEquipment);

SpaceEquipment.lunch = null; // value of lunch is updated from Sandwich to null

console.log(SpaceEquipment);

delete SpaceEquipment.lunch;

console.log(SpaceEquipment); // lunch is deleted entirely

const ToDelete = "helmet";

delete SpaceEquipment[ToDelete]; // The ToDelete constant is deleted (in this case Helmet)

console.log(SpaceEquipment);


// using a For In loop on an object

const petDog = {
    species: 'dog',
    name: 'UP',
    age: 99,
    starSign: 'gemeni',
    isPerfect: true
  };
  const petKeys = []
  for (const key in petDog) {
    petKeys.push(key)  
  }

  console.log(petKeys);

/////////////////////////////////

  const meal = {
    lunch: "sandwich",
    bread: "italian",
    salad: ["tomatoes", "pickles"],
    sauce: true,
    price: 3.99
};
// Start typing below this line

for (const key in meal){
        const value = meal[key]
        console.log(value)
    };



const tree = {
    name: "Oak",
    hasAcorns: true,
    ageInYears: 530,
};

for (const key in tree) { 
    const value = tree[key]
    console.log(`The tree has a key of ${key} holding the value ${value}`)
    // The tree has a key of name holding the value Oak
    // The tree has a key of hasAcorns holding the value true
    // The tree has a key of ageInYears holding the value 530
};

//perfect example of a FOR IN loop

const meal1 = {
    lunch: "sandwich",
    bread: "italian",
    salad: ["tomatoes", "pickles"],
    sauce: true,
    price: 3.99
}

for (let key in meal1){
    console.log(meal1[key])
}

//another attempt
const restaurant = {
    tables: 32,
    staff: {
      chef: "Andy",
      waiter: "Bob",
      manager: "Charlie"
    },
    cuisine: "Italian",
    isOpen: true
  };
  
  const staffNames = []
  const Staffers = restaurant.staff;
  
  for (let staffkey in Staffers){
    staffNames.push(Staffers[staffkey])
  };

  console.log(staffNames);

  const tutorAges = {
    "Lee": 30,
    "Rich": 26,
    "Christian": 30,
    "Jodie": 25,
    "Roisin": 24
  };
  
  const tutorsAgedThirty = []
  // Start typing below this line
  for (let Key in tutorAges){
    if (tutorAges[Key]===30){
      tutorsAgedThirty.push(Key);
    }
  }

    console.log(tutorsAgedThirty);

  // find the sum of the values of these nested objects (i.e. total pets):

    const tutors = {
        'Sarah': { numberOfPets: 1 },
        'Jim': { numberOfPets: 2 },
        'Rayhaan': { numberOfPets: 0 },
        'Róisín': { numberOfPets: 6 },
        'Maddie': { numberOfPets: 2 },
        'Paul': { numberOfPets: 0 }
      };

      let totalPets = 0

      // Answer:
      
      for (let tutor in tutors) {
            for (let numOfPets in tutors[tutor]) {
                    totalPets += tutors[tutor][numOfPets];
                };
            };
    
    console.log(totalPets);

    // Calculate the total number of cats.

    const tutorPetTypes = {
        'Sarah': ['cat'],
        'Jim': ['dog', 'dog'],
        'Joe': ['mouse'],
        'Róisín': ['cat','cat','cat','cat','cat','dog'],
        'Edd': ['lizard', 'cat'],
        'Lewis': ['bearded dragon', 'tortoise']
      }
      
      let totalCats = 0
      // Start typing below this line
      
        for (let tutor in tutorPetTypes){
            for (let petTypes in tutorPetTypes[tutor]){
              if (tutorPetTypes[tutor][petTypes] == 'cat'){
                totalCats = totalCats + 1
              };
            };
        }

        console.log(totalCats);


        // Changes need to be made to this object:

        const kitchen = {
                hasFridge: true,
                favouriteAppliance: 'KeTtlE',
                food: 'eGgS',
                shelvesInCupboards: 3,
                shelvesNotInCupboards: 2,
                petName: 'RhuBarB',
                hoover: 'DysOn'
              };

        //the changes are: 
            // Fix the jumbled string values - replace them all with versions that are all lowercase
            // Remove the hoover property - hoovers don't belong in the kitchen
            // We only need to know the total number of shelves. If shelvesInCupboards and/or shelvesNotInCupboards are present, delete these keys
            // Add a key of totalShelves which is equal to the sum of the values that were under shelvesInCupboards and shelvesNotInCupboards.

        console.log(kitchen);

        //here's my attempt!

        kitchen.totalShelves = 0;
        delete kitchen.hoover;
        
        for (let key in kitchen) { 
                if (typeof kitchen[key] === 'string') {
                kitchen[key] = kitchen[key].toLowerCase();
            }
                if ([key] == "shelvesInCupboards"){
                    kitchen.totalShelves += kitchen[key];
                    delete kitchen.shelvesInCupboards;  
                }
                if ([key] == "shelvesNotInCupboards"){
                    kitchen.totalShelves += kitchen[key];
                    delete kitchen.shelvesNotInCupboards;
                }
        }

        console.log(kitchen);

        function addSomeNums(a, b) {
            const total = a + b
            // return total
          };
          
          const totalNumbers1 = addSomeNums(5, 7);
          
          console.log(`The sum of addSomeNumbs is ${totalNumbers1}`)


 // ---------------------------------------------------------------------------------
 // The Test Questions!!

    function greetFriend(yourNameHere) {
        return(`Hello ${yourNameHere}!`)
    };

    console.log(greetFriend("Isaac"));

// ---------------------------------------------------------------------------------

function add(a, b) {
        return (a + b);
    }
// ---------------------------------------------------------------------------------

function oddOrEven(num) {
    if (num % 2 == 1){
        return "odd"
    }
    else {return "even"}
    };

console.log(oddOrEven(-5));

// ---------------------------------------------------------------------------------
// function to find first odd number in an array:

function findFirstOdd(numbers){
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            return numbers[i]
        };
    };
    return undefined
};

console.log(findFirstOdd([2,4,6,9,8,12,13,18]));

// ---------------------------------------------------------------------------------
// function to return password from object;

    function retrievePassword(user){
        if (user.password){
            return user.password};
        return undefined
    };

    //list of users for testing:
    let user1 = { 
        name: 'Lucy', 
        password: 'n0rthc0derzzz' 
    };

    let user2 = {  
        name: 'Sam', 
        password: 'hi!' 
    }
    
    let user3 = {  
        name: 'Halima', 
        favouriteFood: 'pizza' 
    }

    //console log for testing:
    console.log(retrievePassword(user1));

    // ---------------------------------------------------------------------------------
    // function to search an object for specific key definined within function parameters and return output:

    function retrieveKey(object, keyChoice) {
        if (object[keyChoice]){
            return object[keyChoice];
        }
        return undefined;
        }

    console.log(retrieveKey({ name: 'Sam' }, 'name'));

    // retrieveKey({ name: 'Sam' }, 'name');
    // // returns 'Sam'

    // retrieveKey({ password: 'Chips!' }, 'password');
    // // returns 'Chips!'

    // retrieveKey({ name: 'Sam' }, 'age');
    // // returns undefined


    // ---------------------------------------------------------------------------------
    // function to find all even strings within an array, and return them

    function findEvenLengthStrings(items) {
        let evenStrings = [];
        for (let i=0; i<items.length; i++){
            if (typeof items[i] === 'string' && items[i].length % 2 === 0){
                evenStrings.push(items[i])
               };
            };
        return evenStrings
    };

    console.log(findEvenLengthStrings(['hi', 'home', 'bye', 4]));
    // returns ['hi', 'home'] ignores 'bye' as it is 3 letters in length and '4' as it is not a string.

    // ---------------------------------------------------------------------------------
    // write a function which takes a string, determines if it is a palindrome or not, and returns true/false.


    let reverseString = null;
    function isThisAPalindrome(str) {

        if (typeof str === 'string') {
            reverseString = str.split("").reverse().join("");
        };

        if (reverseString === str){
            return true;
        }
        else {return false};
        };

    console.log(isThisAPalindrome("WOW")); // returns TRUE

    // ---------------------------------------------------------------------------------
    // Write a function that takes an array of numbers and returns the biggest and smallest in an object.


    function findBiggestAndSmallest(bigSmallNumbers) {

        if (bigSmallNumbers.length > 0){
            let smallToBig = bigSmallNumbers.sort(function(a, b){return a-b})
            let small = smallToBig[0];
            let big = smallToBig[smallToBig.length - 1];
            let bigAndSmall = {biggest: big, smallest: small};
            return bigAndSmall;
        }
        else return {};
    };

    console.log(findBiggestAndSmallest([100, 2, 99, 1])); // returns {biggest: 100, smallest: 1}

    // ---------------------------------------------------------------------------------
    // Write a function that takes a single interger and returns true if it's a prime number or false if not

    function checkIsPrime(num) {
        if (num === 1) {
          return false;
        }
        if (num === 2) {
          return true;
        }
        if (num % 2 === 0) {
          return false;
        }

        for (let i = 3; i <= Math.sqrt(num); i+=2 ) {
          if (num % i === 0) {
            return false;
          }
        }

        return true;
      }

    console.log(checkIsPrime(2)); // true
    console.log(checkIsPrime(3)); // true
    console.log(checkIsPrime(5)); // true
    console.log(checkIsPrime(6)); // false
    console.log(checkIsPrime(7)); // true
    console.log(checkIsPrime(9)); // false
    console.log(checkIsPrime(10)); // false
    console.log(checkIsPrime(11)); // true

    // ---------------------------------------------------------------------------------
    // Capitalise the string input and return greeting

    function greetGuest(name) {
        return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`
        };

    console.log(greetGuest("Douglas")); // returns 'Hello Douglas!'
    console.log(greetGuest("maddie")); // returns 'Hello Maddie!'
    console.log(greetGuest("poonam")); // returns 'Hello Poonam!'

    // ---------------------------------------------------------------------------------
    // Function will take a string, and return true if the string contains a number or false if not.

    function findTicketPrices(emailString) {
            return /[0-9]/.test(emailString);
        }

    console.log 
    console.log(findTicketPrices("4")); // returns true
    console.log(findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?")); // returns true
    console.log(findTicketPrices("I would be willing to pay 30 for a ticket")); // returns true
    console.log(findTicketPrices("Thanks for making this event pay what you can afford!")); // returns false


// ---------------------------------------------------------------------------------
// Function to take in an object, split the name key into firstName and lastName, and return an object:

    function makeGuestList(person) {
        let nameSplit = person.name.split(" ");
        person.firstName = nameSplit[0];
        person.lastName = nameSplit[1];
        delete person.name;
        return person;
    };

console.log(makeGuestList({ name: "Hannah Fry", age: 46 }));
// should return { firstName: "Hannah", lastName: "Fry", age: 46 }

console.log(makeGuestList({ name: "Paul Erdős", age: 46 }));
// should return { firstName: "Paul", lastName: "Erdős", age: 46 }

// ---------------------------------------------------------------------------------
// take object and string input, modify object to include new key with string as value.

function trackAttendees(person, ticketCost) {
    person.paidForTicket = +ticketCost.replace(/[^0-9]/g,""); // + converts string to number. /[^0-9]/g,"" removes all text other than numbers
    return person;
    };

console.log(trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25'));
// should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }

console.log(trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0'));
// should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }

console.log(trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13'));
// should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }

// ---------------------------------------------------------------------------------
// take in an array containing guest "objects". If paidForTicket > 100 & total guests > 5, return true. Else false.

let guestCheck = 0;
let ticketCheck = 0;

function isPartyViable(guests) {
    let totalTickets = 0;
    for (let i = 0; i<guests.length; i++){
        totalTickets += guests[i].paidForTicket;
        };
    if (totalTickets >= 100 && guests.length >= 5){
        return true;
    }
    else return false;
};

    const guests1 = [
        { name: "diya", paidForTicket: 15 },
        { name: "amul", paidForTicket: 2 },
        { name: "saleh", paidForTicket: 2 },
        { name: "philippa", paidForTicket: 30 },
      ];
    console.log(isPartyViable(guests1));
      // should return false

      const guests2 = [
        { name: "diya", paidForTicket: 90 },
        { name: "amul", paidForTicket: 20 },
        { name: "saleh", paidForTicket: 2 },
        { name: "philippa", paidForTicket: 30 },
        { name: "kev", paidForTicket: 26 },
        { name: "sarah", paidForTicket: 11 },
      ]
      console.log(isPartyViable(guests2));
      // should return true


// ---------------------------------------------------------------------------------
// sum total of object 1 values and multiply them by object 2


function orderSupplies(supplies, guests) {
    let suppliesPerPerson = 0;
    for (let key in supplies){
        suppliesPerPerson += supplies[key];
    };
    return suppliesPerPerson * guests;
    };

console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));
    // should return 18
    
console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));
    // should return 160

// ---------------------------------------------------------------------------------
// Take in numbr of guests + number of seats per table. Output object to show number of tables needed + remainder seats

function calculateTables(guests, seats) {
    let guestSeating = {};
    guestSeating.tables = Math.floor(guests/seats); //Math.floor returns devision but ignores remainder
    guestSeating.remainingGuests = guests % seats;
    return guestSeating;
    };

console.log(calculateTables(4, 2));
    // should return { tables: 2 , remainingGuests: 0 }
    
console.log(calculateTables(14, 6));
    // should return { tables: 2 , remainingGuests: 2 }
    
console.log(calculateTables(26, 5));
    // should return { tables: 5 , remainingGuests: 1 }

// ---------------------------------------------------------------------------------
// calculate cost of taxi in pence, based on number of seconds input to function. 
// rules: Up to 3 minutes = £5. 70p additional charge after that. Always round second UP to minutes. 

function calculateTaxiFare(seconds) {
    let minutes = Math.ceil(seconds/60);
    if (minutes <= 3){
        return 500;
    }
    else {
        return 500 + ((minutes - 3)*70)
    };
    };

console.log(calculateTaxiFare(150));
    // should return 500
    
console.log(calculateTaxiFare(360));
    // should return 710
    
console.log(calculateTaxiFare(491));
    // should return 920

// ---------------------------------------------------------------------------------
// single array input. Return only odd indexed elements. Return them as OBJECT containing two keys: index num & element itself.

function pickWinners(numbers) {
    let winnersarray = [];
    for (let i = 0; i < numbers.length; i ++){
        if (numbers[i] % 2 !== 0 && i % 2 !== 0){
            let winnerobject = {};
            winnerobject.seat = i;
            winnerobject.ticketCost = numbers[i];
            winnersarray.push(winnerobject);
        }
    };
    return winnersarray;
    };

console.log(pickWinners([6, 7, 12, 49]));
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

console.log(pickWinners([1, 3, 5, 7, 9, 11]));
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]

console.log(pickWinners([1, 6, 13, 8, 29, 50]));
// should return []

// ---------------------------------------------------------------------------------
// function to take in two parameters: 1) array of objects 2) a boolean (hasAntidote). 
// if boolean is true, always return true.
// if false, check objects within array for value of 'zombie', if found, return false. Else return true.

function checkIfHealthyColony(colony, hasAntidote){
    if (hasAntidote == true){
        return true;
    };
    for (let i = 0; i < colony.length; i++){
        if (colony[i].type == "zombie"){
        return false;
        };
    };
    return true;
};

console.log(checkIfHealthyColony([{name: "anthony", type: "worker"},{name: "john", type: "zombie"}], true))
// should return TRUE

console.log(checkIfHealthyColony([{name: "anthony", type: "worker"},{name: "john", type: "zombie"}], false))
// should return FALSE

console.log(checkIfHealthyColony([{name: "anthony", type: "worker"},{name: "john", type: "queen"}], false))
// should TRUE


// ---------------------------------------------------------------------------------
// take array or arrays. Catagorise resonses into 3 groups (pos, neg, neut), sum up responses of each category
// positive (7-10), negative (0-3) or neutral (4-6).



function gatherFeedback(feedbackArray) {

    let positive = 0;
    let negative = 0;
    let neutral = 0;

    for (let i = 0; i < feedbackArray.length; i++){

        switch (true){
            case feedbackArray[i][1] <= 3:
                negative += 1
                    break;
            case feedbackArray[i][1] >= 7:
                positive += 1
                    break;
            case feedbackArray[i][1] < 7 && feedbackArray[i][1] > 3:
                neutral += 1
                    break;
        };
    
    };

    let feedback = {"positive": positive, "negative": negative, "neutral":neutral};
    return feedback;
};

console.log(gatherFeedback([['maddie', 5], ['jatinder', 2], ['rose', 9]]));
// returns {positive: 1, negative: 1, neutral:1}

console.log(gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]));
// returns {positive: 3, negative: 0, neutral:0}

console.log(gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]));
// returns {positive: 2, negative: 1, neutral:0}

// ---------------------------------------------------------------------------------
// function to return true if string input is 5 characters in length or more


function isWordLong(word){
    if (typeof word === "string" && word.length >= 5) {
        return true;
    }
    else return false;
};


console.log(isWordLong("Testing"));
//should return TRUE

console.log(isWordLong("Smol"));
//should return FALSE as less than 5 characters

console.log(isWordLong("a b cd"));
//should return TRUE as spaces are counted.

console.log(isWordLong(568592));
//should return FALSE as not a string 


// ---------------------------------------------------------------------------------
// function to multiply any numbers from array by 7


function multiply(arr) {
    let multiplied = [];
        for (let i = 0; i < arr.length; i++){
            if (typeof arr[i] === "number"){
            multiplied.push(arr[i]*7)
            }
            else return NaN;
        };
    return multiplied;
};

  console.log(multiply([3, 6, 9, 12]));
  //should return [21, 42, 63, 84]

  console.log(multiply([3, 5, "c", 2]));
  //should return NAN


  // ---------------------------------------------------------------------------------

  function evenOrOdd(number) {
    if (number % 2 === 0){
      return "Even"
    }
    else return "Odd";
  };
  
  console.log(evenOrOdd(10));


  // ---------------------------------------------------------------------------------

  function sayHappyBirthday(number) {
        return `Happy Birthday, you are ${number} today!`
    }

console.log(sayHappyBirthday(25));
// returns 'Happy Birthday, you are 25 today!'

console.log(sayHappyBirthday(7));
// returns 'Happy Birthday, you are 7 today!'
  

// ---------------------------------------------------------------------------------

function removeLastItem(arr) {
        arr.pop();
        return arr;
    };

console.log(removeLastItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    // should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
console.log(removeLastItem(['a', 'b', 'c', 'd', 'e']));
    // should return ['a', 'b', 'c', 'd']

// ---------------------------------------------------------------------------------

function checkForEnoughBeds(beds, numOfPeople) {
    let numOfSpaces = (beds.doubles * 2) + beds.singles;
    if (numOfPeople <= numOfSpaces){
        return true;
    }
    else return false;
    };

console.log(checkForEnoughBeds({ doubles: 3, singles: 1 }, 7));
// should return true

console.log(checkForEnoughBeds({ doubles: 2, singles: 5 }, 10));
// should return false

console.log(checkForEnoughBeds({ doubles: 6, singles: 0 }, 9));
// should return true 

// ---------------------------------------------------------------------------------

function makeAlternatingArray(array) {
    if (array.length <= 1){
        return array;
    }
    else {
    let alternatingArray = [];
    for (let i = 0; i < array.length; i ++){
        if (i % 2 === 0){
            alternatingArray.push(array[i]);
        };
    };
    return alternatingArray;
};};

console.log(makeAlternatingArray(['hey', 'hi']));
    // should return ['hey']
    
console.log(makeAlternatingArray(['a', 'b', 'c', 'd', 'e']));
    // should return ['a', 'c', 'e']
    
console.log(makeAlternatingArray([100, 42, 99, 3, -5]));
    // should return [100, 99, -5]

    console.log(makeAlternatingArray([]));
    // should return []

    console.log(makeAlternatingArray([10]));
    // should return []

// ---------------------------------------------------------------------------------

    function addSoundToPets(pets) {
        for (let i = 0; i < pets.length; i ++){
            if (pets[i].type === 'cat'){
                pets[i].sound = 'meow!'
            }
            else {pets[i].sound = 'woof!'};
        };
        return pets;
        };


console.log(addSoundToPets([{ name: 'Bolin', type: 'cat' }]));
        // should return
        [{ name: 'Bolin', type: 'cat', sound: 'meow!' }];
        
console.log(addSoundToPets([
          { name: 'Bolin', type: 'cat' },
          { name: 'Lily', type: 'dog' }
        ]));
        // should return
        [
          { name: 'Bolin', type: 'cat', sound: 'meow!' },
          { name: 'Lily', type: 'dog', sound: 'woof!' }
        ];
        
console.log(addSoundToPets([]));
        // should return []


// ---------------------------------------------------------------------------------

function countTheCapitals(string) {
    let numOfCaptials = 0;
    for (let i = 0; i < string.length; i ++){
        if (/[A-Z]/.test(string[i]) == true){
            numOfCaptials += 1;
        };
    };
    return numOfCaptials;
};

console.log(countTheCapitals("Northcoders"));
    // should return 1
    
console.log(countTheCapitals("lower"));
    // should return 0
    
console.log(countTheCapitals("Hello there WORLD"));
    // should return 6

// ---------------------------------------------------------------------------------

function findKnifeAndFork(utensils) {
    let knifeAndFork = {knife: -1, fork: -1};
    for (let i = 0; i < utensils.length; i ++){
        if (utensils[i] === 'knife'){
            knifeAndFork.knife = i;
        };
        if (utensils[i] === 'fork'){
            knifeAndFork.fork = i;
        };
    };
    return knifeAndFork;
};

console.log(findKnifeAndFork(['knife', 'apple', 'spoon', 'spatula', 'fork']));
    // should return { knife: 0, fork: 4 }
    
console.log(findKnifeAndFork(['scissors', 'cup', 'fork', 'knife', 'spatula', 'whisk']));
    // should return { knife: 3, fork: 2 }
    
console.log(findKnifeAndFork(['cup', 'whisk', 'spoon', 'knife']));
    // should return { knife: 3, fork: -1 }

// ---------------------------------------------------------------------------------

function truncateString(str, n) {
        if (n < str.length){
            return `${str.slice(0, n)}...`;
        }
        else return str.slice(0, n);
    };

console.log(truncateString("I like to move it, move it", 8));
    // Should return "I like t..."
    
console.log(truncateString("This is ground control to Major Tom", 14));
    // Should return "This is ground..."
    
console.log(truncateString("This is not the greatest song in the world", 45));
    // Should return "This is not the greatest song in the world"

// ---------------------------------------------------------------------------------

function findOldestPerson(people) {
    if (people.length > 0){
        let ages = [];
        for (let i = 0; i < people.length; i ++){
            ages.push(people[i].age)
        };
        let maxAge = Math.max(...ages);
        for (let i = 0; i < people.length; i ++){
            if (people[i].age === maxAge){
                return people[i].name;
            }
        };
    } else return 'no people found';
};

console.log(findOldestPerson([
        { name: 'Liam', age: 28 },
        { name: 'Eli', age: 37 },
        { name: 'Poonam', age: 22 },
        { name: 'Cameron', age: 32 }
      ]));
// Should return 'Eli'
      
console.log(findOldestPerson([]));
// Should return 'no people found'

// ---------------------------------------------------------------------------------

function countTheShouts(strings) {
    let shoutCount = 0;
    for (let i = 0; i < strings.length; i ++){
        if (strings[i].slice(-1).includes('!')){
            shoutCount += 1;
        };
    };
    return shoutCount;
};

console.log(countTheShouts(['hello', 'apple!', 'wow!', 'here', 'window!', 'car']));
    // returns 2
    
console.log(countTheShouts(['picture', 'mystery', 'dog', 'pizza', 'hey', 'llama']));
    // returns 0


// ---------------------------------------------------------------------------------

function findCommonItems(arr1, arr2) {
    let returnArr = [];
    for (let i = 0; i < arr1.length; i ++){
        let arrayCheck = arr1[i];
            for (let i = 0; i < arr2.length; i ++){
                if (arr2[i] === arrayCheck){
                    returnArr.push(arrayCheck);
                };
            };
        };
    return [...new Set(returnArr)];
};

console.log(findCommonItems([], [])); // should return []

console.log(findCommonItems(['a', 'b'], ['a'])); // should return ['a']
    
console.log(findCommonItems(['a', 'b', 'c', 'd'], ['c', 'd', 'e', 'f', 'g']));
    // should return ['c', 'd']
    
console.log(findCommonItems(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c', 'd']));
    // should return ['a', 'b', 'c']

// ---------------------------------------------------------------------------------

function makeSingleArray(arr) {
    let singleArray = arr.flat();
    return singleArray.filter(value => /^-?\d+\.?\d*$/.test(value));
    };

console.log(makeSingleArray([])); 
// should return []

console.log(makeSingleArray([ [1, 2] ]));
// should return [1, 2]
    
console.log(makeSingleArray([
      [1, 2],
      ['b', 3]
    ]));
// should return [1, 2, 3]


// ---------------------------------------------------------------------------------

function roundUpToNearestMultiple(n, x) {
        if (x === 0){
            return -1
        };
        if (x >= n){
            return x
        }
        else {
            return x * Math.ceil(n / x);
        };
    };

console.log(roundUpToNearestMultiple(21, 5));
    // should return 25
    
console.log(roundUpToNearestMultiple(4, 3));
    // should return 6
    
console.log(roundUpToNearestMultiple(4, 17));
    // should return 17
    
console.log(roundUpToNearestMultiple(41, 0));
    // should return -1


// ---------------------------------------------------------------------------------
// learning how to write arrow functions


// ---------------------------------------------
// Example 1

//regular funciton:
function sumNotArrow (a, b){
    return a + b;
};

//arrow function:
let sumWithArrow = (a, b) => a + b;

console.log(sumNotArrow(5, 10));
console.log(sumWithArrow(5, 10));

// ---------------------------------------------
// Example 2

//regular function:
function isNotArrowPositive (number){
    if (number >= 3){
    return number}
    else return false;
};

//arrow function:
let isArrowPositive = number => {if (number >= 3) true; else false};

console.log(isNotArrowPositive(5));  // should return TRUE
console.log(isNotArrowPositive(1));  // should return FALSE

console.log(isNotArrowPositive(5));  // should return TRUE
console.log(isNotArrowPositive(1));  // should return FALSE

// ---------------------------------------------
// Example 3

class arrowPerson {
    constructor(name) {
        this.name = name
    };

    printNameArrow() {
        setTimeout(() => {
            console.log(`Arrow: ` + this.name)
        }, 100)
    };

    printNameFunction() {
        setTimeout(function() {
            console.log(`function: ` + this.name)
        }, 100)
    }
};

let Person = new arrowPerson('bob');
Person.printNameArrow()  // works as the .THIS keyword is not redefined, keeping the value from above
Person.printNameFunction()  // doesn't work as the .THIS keyword is defined from where the funciton is called


// ---------------------------------------------
// Write a function that takes two numbers (a and b) and returns the remainder of a divided by b.

function modulo(a, b) {
        return a % b
    };


console.log(modulo(4, 2)); //returns 0

console.log(modulo(456, 25)) //returns 6

// ---------------------------------------------
// Write a function that takes a number (n) and returns the square root of that number.

function squareRoot(n) {
    return Math.sqrt(n)
    };

console.log(squareRoot(4)); //returns 2

console.log(squareRoot(36)) //returns 6

// ---------------------------------------------
// Write a function that takes two numbers (m and n) and returns the result of raising m to the power of n.


function raiseToPower(m, n) {
    return Math.pow(m, n)
    };

console.log( raiseToPower(2, 3) ) // returns 8


// ---------------------------------------------
// Format a number with currency values and styles:

function formatMoneyTwo(amount) {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount)
    };

console.log( formatMoneyTwo(2.33) ); //returns "£2.33" 

// ---------------------------------------------
// Format a number with currency values and styles:

function formatMoney(amount) {
    return "£" + amount.toFixed(2)
    };

console.log( formatMoney(2.33) ); //returns "£2.33" 

// ---------------------------------------------
// Calculate Circle Area:

function calculateCircleArea(r) {
    return Number((Math.PI * Math.pow(r,2)).toFixed(3))
    };


console.log( calculateCircleArea(1) )//returns 3.142


    // A=πr2

// ---------------------------------------------
// Calculate Full Turns:

function calculateFullTurns(degrees) {
    return Math.floor( degrees / 360)
    };

console.log(calculateFullTurns(10)) //returns 0;

console.log(calculateFullTurns(360)) //returns 1;
    
console.log(calculateFullTurns(720)) //returns 2;
    
console.log(calculateFullTurns(400)) //returns 1;


// ---------------------------------------------
// Find Smallest and Biggest:

let maxAndMin = [];

function findSmallestAndBiggest(arr) {
    maxAndMin.push(Math.min(...arr));
    maxAndMin.push(Math.max(...arr));
    return maxAndMin;
    };

// console.log( findSmallestAndBiggest([1, 2, 3, 4, 5]) ); //returns [1, 5]; 
let randoArray = [8, 4, 12, 6, 1];
console.log(...randoArray);
console.log(randoArray)

// ---------------------------------------------
// Split The Beans:


function splitTheBeans(totalCost, numOfPeople) {
    return Math.ceil( totalCost / numOfPeople ) 
    };

console.log( splitTheBeans(10, 2) ) //returns 5;

console.log ( splitTheBeans(10, 3) )//returns 4;


// ---------------------------------------------
// Are These Values Equal?

function areValuesEqual(value1, value2) {
    if (value1 === value2){
        return true}
    else return false;
    };

    console.log( areValuesEqual(1, 1) ) // returns true

    console.log( areValuesEqual('hello', 'hello') ) // returns true
    
    console.log( areValuesEqual(1, '1') ) // returns false
    
    console.log( areValuesEqual([], []) ) // returns false

// ---------------------------------------------
// Are These Values Not Equal?

function areValuesNotEqual(value1, value2) {
    if (value1 !== value2){
        return true}
    else return false;
    };

console.log( areValuesNotEqual(1, '1') ); // returns true

console.log( areValuesNotEqual('hello', 'goodbye') ); // returns true

console.log(  areValuesNotEqual([], []) ); // returns true

console.log(  areValuesNotEqual(1, 1) ); // returns false

console.log(  areValuesNotEqual(true, true) )// returns false

// ---------------------------------------------
// Is It From the 60s?

function isFromThe60s(year) {
    if (year > 1959 && year < 1970){
        return true
    }
    else return false
    };

    console.log(    isFromThe60s(1960) )// returns true

    console.log(    isFromThe60s(1965) )// returns true
    
    console.log(    isFromThe60s(1969) )// returns true
    
    console.log(    isFromThe60s(1970) )// returns false
    
    console.log(    isFromThe60s(1865) )// returns false

// ---------------------------------------------
// Is the string an even length?

function isEvenLength(string) {
        if (string.length % 2 === 0){
            return true
        }
        else return false;
    };

    console.log(    isEvenLength('even') )// returns true

    console.log(    isEvenLength('everyone') )// returns true
    
    console.log(   isEvenLength('') )// returns true
    
    console.log(   isEvenLength('odd') ) // returns false
    
    console.log(  isEvenLength('false') )// returns false

// ---------------------------------------------
// Are these strings equal ignoring case?

function areStringsEqualCaseInsensitive(string1, string2) {
        if (string1.toLowerCase() == string2.toLowerCase()){
            return true}
        else return false
};

console.log(    areStringsEqualCaseInsensitive('hello', 'hello') )// returns true

console.log(    areStringsEqualCaseInsensitive('hello', 'HELLO') )// returns true

console.log(    areStringsEqualCaseInsensitive('banANA', 'BANana')  ) // returns true

console.log(    areStringsEqualCaseInsensitive('hello', 'hella') ) // returns false

console.log(    areStringsEqualCaseInsensitive('apple', 'BANANA') ) // returns false

// ---------------------------------------------
// No need to shout!

function dontShoutSentence(string) {
    return string.charAt(0)+string.slice(1).toLowerCase();
};

console.log(   dontShoutSentence("HELLO") )// returns 'Hello'

console.log(   dontShoutSentence("HELLO NORTHCODERS") )// returns 'Hello northcoders'

console.log(   dontShoutSentence("CODING IS GREAT!!!") )// returns "Coding is great!!!"


// ---------------------------------------------
// Get the middle character

function getMiddle(string) {
    let middle = Math.floor(string.length/2);
    
    if (string.length % 2 == 0){
        return string.slice(middle-1, middle+1)
        }
    else{
        return string.charAt(middle);
    }

    };

console.log(    getMiddle("and") )// returns 'n'

console.log(      getMiddle("cloud") )// returns 'o'
    
console.log(      getMiddle("chin") )// returns 'hi'
    
console.log(      getMiddle("castle") )// returns 'st'

let nameTest = "IsaacMadden"
console.log (nameTest.slice(2,6));


// ---------------------------------------------
// Get the last word

function getLastWord(string) {
    let lastWord = string.split(" ");
    return lastWord.pop()
    };

console.log(    getLastWord("biscuits") )// returns 'biscuits'

console.log(     getLastWord("custard cream") )// returns 'cream'
    
console.log(     getLastWord("biscuits are great with tea") )// returns "tea"


let splitText = "biscuits are great with tea"
let splitArray = splitText.split(" ");
console.log(splitArray)  // returns ['biscuits', 'are', 'great', 'with', 'tea']
console.log(splitArray.pop()); // returns tea

// ---------------------------------------------
// Hyphenate-all-the-words

function hyphenateWords(string) {
    return string.replaceAll(" ", "-");
    };

console.log(     hyphenateWords("hello my guy") )// returns 'hello'

console.log(     hyphenateWords("hello northcoder dudes") )// returns 'hello-northcoders'

// ---------------------------------------------
// Converting to camel case


function convertToCamelCase(string) {
    let wordsArray = string.toLowerCase().split(" ");
    let camelArray = [];

    for (let i=0; i < wordsArray.length; i++){
        if (i < 1){
            camelArray.push(wordsArray[i])
            }
        else {
            camelArray.push(wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1))
            };
        };

    return camelArray.join("");

    };

console.log(    convertToCamelCase("hello") )// returns 'hello'

console.log(     convertToCamelCase("hello northcoders") )// returns 'helloNorthcoders'
    
console.log(     convertToCamelCase("I love JavaScript") )// returns 'iLoveJavascript


// ---------------------------------------------
// Please enter a valid password

function passwordValidation(password) {
    let check1 = password.includes("1", password.length-1);
    let checkn = password.toLowerCase().includes("n");
    let checkc = password.toLowerCase().includes("c");

    if (check1  && checkn && checkc){
        return "valid"
    }
    else return "invalid"
    };

    console.log(     passwordValidation("northcoders1") )// returns 'valid'

    console.log(     passwordValidation("NORTHCODERS1") )// returns 'valid'
    
    console.log(     passwordValidation("nope1") )// returns 'invalid'
    
    console.log(     passwordValidation("northcoders") )// returns 'invalid'


// ---------------------------------------------
// Get Even Numbers

function getEvenNumbers(nums) {

    let evensArray = [];

    for (let i=0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            evensArray.push(nums[i])
        };
    };
    return evensArray;

};

console.log( getEvenNumbers([1, 2, 3]) ) //returns [2] 
console.log( getEvenNumbers([5, 7, 9, 12, 14, 17, 20]) ) //returns [12, 14, 20] 



// ---------------------------------------------
// Get Items Longer Than



function getItemsLongerThan(array, len) {

    let numbersOfLength = [];

    for (let i=0; i < array.length; i++){
        if (array[i].length > len){
            numbersOfLength.push(array[i])
        };
    };
    return numbersOfLength;

};


console.log(   getItemsLongerThan(['a','bb','ccc'], 1)  ) //returns ['bb', 'ccc'];

console.log(     getItemsLongerThan(['a','bb','ccc'], 2) ) //returns ['ccc'];
    
console.log(     getItemsLongerThan(['a','bb','ccc'], 4) ) //returns [];


// ---------------------------------------------
// Get Last Items

function getLastItems(array, n) {

    let lastNumbers = array.slice(array.length-n, array.length);
    return lastNumbers;
    };

console.log(getLastItems([1, 2, 3, 4, 5], 2) ); //returns [4, 5];
console.log(getLastItems([1, 2, 3, 4, 5], 3) ); //returns [3, 4, 5];


// ---------------------------------------------
// Get Sandwich Filling

function getSandwichFilling(sandwich) {

    sandwich.pop();
    sandwich.shift();
    return sandwich;

    };

console.log(  getSandwichFilling(['bread', 'bacon', 'bread']) ) //returns ['bacon']

console.log(  getSandwichFilling(['bread', 'halluomi', 'lettuce', 'bread']) )//returns ['halluomi', 'lettuce']
    
console.log(  getSandwichFilling(['a', 'b', 'c', 'd']) )//returns ['b', 'c']



// ---------------------------------------------
// Remove Item (try using FILTER method?)

function removeItem(array, n) {

    return array.filter ( (element, index, array) => index !== n) 

};

console.log ( removeItem([1, 2, 3], 1)  ) //returns [1, 3]

console.log ( removeItem([3], 0) ) //returns []

// ---------------------------------------------
// Merge Arrays

function mergeArrays(arr1, arr2) {

    return arr1.concat(arr2);

    };

console.log (mergeArrays([1, 2], [3, 4])) //returns [1, 2, 3, 4]


// ---------------------------------------------
// Is Item Omnipresent
//Write a function that takes an array of nested arrays (arrayOfArrays) and an item to be found (item). 
//It should return true if the passed item is present in all of the arrays inside arrayOfArrays. 
//Otherwise, it should return false.

function isItemOmnipresent(arrayOfArrays, item) {

    let itemCount = 0;

    for (let i=0; i < arrayOfArrays.length; i++){

        if (arrayOfArrays[i].includes(item)){
            itemCount += 1;
        }
    };

    if (itemCount === arrayOfArrays.length) {
        return "true, present in all";
    }
    else if (itemCount > 0){
        return `false only present in ${itemCount} arrays`;
    }
    else return "false, not present in any"
};

console.log( isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 3) ) //returns true, present in all 
console.log( isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 9) ) //returns false, not present in any
console.log( isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 4) ) //returns false, only present in 2 arrays

// ---------------------------------------------
// Flatten Array By One

function flattenArrayByOne(arrayOfArrays) {
    return arrayOfArrays.flat();
    };

console.log(    flattenArrayByOne([[1],[2],[3]])  ) //returns [1,2,3];

console.log(    flattenArrayByOne([[1],[2],[[3,4]]])  ) //returns [1,2,[3,4]];


// ---------------------------------------------
// Is Over 40


function isOver40(user) {

    if (user.age > 40){
        return true
    }
    else return false;
};

console.log( isOver40({age: 50}) )//returns true;

console.log( isOver40({age: 30}) )//returns false;
    
console.log( isOver40({age: 40}) )//returns false;


// ---------------------------------------------
// Get User Age (based off of current year)


function getUserAge(user) {
    return new Date().getFullYear() - user.yearOfBirth
    };

console.log ( getUserAge({yearOfBirth: 1991}) )//returns 32 (as of 2023!)


// ---------------------------------------------
// Get User Pet Age

function getUserPetAge(user) {
    // Your code goes here...

    return user.pet.age;

    };


let userpet = {
    name: "Carrie",      
    age: 26,
    pet: {
        name: "Pixie",
        age: 4,
        type: "gremlin"
    }
    };

console.log (  getUserPetAge(userpet)   ) //returns 4


// ---------------------------------------------
// Create Product

function createProduct() {
    let object= {
        type: "blablabla",
        price: 5,
    };
    return object;
    };

console.log (  createProduct()  )


// ---------------------------------------------
// Add Price To Product

function addPriceToProduct(product, price) {
    product.price = price;
    return product;
    };

console.log(addPriceToProduct({ type: 'Tofu slices' }, 2.20))//returns {type: 'Tofu slices', price: 2.20};

// ---------------------------------------------
// Get Property Of Product

function getPropertyOfProduct(product, property) {
    return product[property];
    };


console.log (  getPropertyOfProduct({ type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }, 'price')   )  //returns '£1.09'


// ---------------------------------------------
// Create Northcoder

function createNorthcoder(name, yearOfBirth) {

    let Northcoder = {};

    Northcoder.name = name;
    Northcoder.age = 2023 - yearOfBirth;
    Northcoder.language = 'JavaScript';

    return Northcoder;

    };

console.log ( createNorthcoder('Callum', 1992)  )
/* returns { 
  name: 'Callum', 
  age: 31, 
  language: 'JavaScript' 
} 
*/


// ---------------------------------------------
// Update Voter Address

function updateVoterAddress(voter, correctHouseNumber) {
    voter.address.houseNumber = correctHouseNumber;
    };

// ---------------------------------------------
// Create User String

function createUserString(userObj) {

    return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`

    };

    const userObj = { 
        name: 'Callum', 
        age: 31, 
        language: 'JavaScript' 
      };

console.log( createUserString(userObj) )// returns 'name: Callum, age: 31, language: JavaScript';

// ---------------------------------------------
// Get Album Properties

function getAlbumProperties(obj) {
    return Object.keys(obj);
    };

console.log (  getAlbumProperties({a: 'foo', b: 'bar', c: 'car'})  )  //returns ['a', 'b', 'c'];

// ---------------------------------------------
// Get Northcoders Names

function getNorthcodersNames(northcoders){

    let namesArray = [];

        for (let i=0; i < northcoders.length; i++){
            namesArray.push(northcoders[i].name)
        };

    return namesArray;
};

const northcoders = [
  {
    name: 'Callum',
    age: 31,
    language: 'JavaScript'
  },
  {
    name: 'Carrie',
    age: 32,
    language: 'JavaScript'
  }
];

console.log( getNorthcodersNames(northcoders) ) //returns ['Callum', 'Carrie'];


// ---------------------------------------------
// Delete Many Passwords

function deleteManyPasswords(users) {

    for (let i=0; i < users.length; i++){
        delete users[i].password
    };

    return users;

};

console.log(    deleteManyPasswords([
        { name: 'Barry', password: 'ilovetea' },
        { name: 'Sandeep', password: 'ilovecoffee' },
        { name: 'Kavita', password: 'ilovepie' }
      ]) );

// returns [
//  { name: 'Barry' }, 
//  { name: 'Sandeep' }, 
//  { name: 'Kavita' }
//  ]


// ---------------------------------------------
// Count The Objects

function countTheObjects(arr) {

    let objectCount = 0;
    
    for (let i=0; i < arr.length; i++){

        if (typeof arr[i] === "object" && Array.isArray(arr[i]) !== true && arr[i] !== null){
            objectCount += 1
        };
    };

    return objectCount;
    
};


console.log(    countTheObjects([1, 2, 3, 'hi']) )        //returns 0;
console.log(    countTheObjects([{}, {}]) )         //returns 2;
console.log(    countTheObjects([1, 2, 3, 'hi', {}, {}, [], null]) )      //returns 2;


// ---------------------------------------------
// Flipping booleans!

function flipBooleans(bools) {

    return bools.map(x => !x)

};

console.log(    flipBooleans([true, true, true])   )   // returns [false, false, false]

console.log(     flipBooleans([false, false, false])   )   // returns [true, true, true]
    
console.log(     flipBooleans([true, false, false, true])   )   // returns [false, true, true, false]
    
console.log(     flipBooleans([])   )   // returns []

// ---------------------------------------------
// Translating keys

function translateKey(student, keyToChange, translation) {

    let newStudent = Object.assign({}, student);
    newStudent[translation] = newStudent[keyToChange];
    delete newStudent[keyToChange];
    return newStudent;

};


const student = {
    prénom: 'Carla',
    surname: 'Bruni',
    job: 'Artist'
};

const keyToChange = 'prénom'
const translation = 'firstName'

console.log (  translateKey(student, keyToChange, translation) )

/* should return the following:

{
    firstName: 'Carla',
    surname: 'Bruni,
    job: 'Artist'
} 
*/


// ---------------------------------------------
// Find the Dentist

function findFirstDentist(people) {

    if ( people == false ){
        return null
    };

    for (let i=0; i < people.length; i++){

        if ( people[i].isDentist === true){
            return people[i]
        }
    };

    return null
};

console.log (  findFirstDentist([]) );
// returns null

console.log ( findFirstDentist([{name: 'Callum', isDentist: false}]) );
// returns null

console.log ( findFirstDentist([{name: 'Callum', isDentist: false}, {name: 'Carrie', isDentist: true}]) );
// returns {name: 'Carrie', isDentist: true}

console.log ( findFirstDentist([{name: 'Callum', isDentist: true}, {name: 'Carrie', isDentist: true}]) );
// returns {name: 'Callum', isDentist: true}


// ---------------------------------------------


console.log ( "----- console break -----");


// ---------------------------------------------
// Tally the People in Manchester * NOTE * I'm using a forEach loop!!!

function tallyPeopleInManchester(people) {

    let manchesterTally = 0;

    // for (let i = 0; i < people.length; i++){
    //     if (people[i].lives.city === 'Manchester')
    //     manchesterTally =+ 1
    // };

    people.forEach( (person) => { if (person.lives.city === 'Manchester') { manchesterTally += 1 } } )

    return manchesterTally;
};




console.log ( tallyPeopleInManchester([{ name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }]) )
// returns 1

console.log (tallyPeopleInManchester([{ name: 'Carrie', lives: { country: 'UK', city: 'Leeds' }, age: 32 }]) )
// returns 0

console.log (tallyPeopleInManchester([{ name: 'Carrie', lives: { country: 'UK', city: 'Leeds' }, age: 32 }, { name: 'Ray', lives: { country: 'UK', city: 'Manchester' }, age: 31 }]) )
// returns 1

console.log ( tallyPeopleInManchester([]) )
// returns 0


// ---------------------------------------------
// Get the pug owners! *NOTE* Using a .forLoop for the second time in a row!!

function getPugOwners(dogs) {

    let ownerNamesArray = [];

    // for (let i = 0; i < dogs.length; i++){
    //     if (dogs[i].breed === 'Pug'){
    //     ownerNamesArray.push(dogs[i].owner)
    //     };
    // };

    dogs.forEach( (dog) => { if (dog.breed === 'Pug'){ ownerNamesArray.push(dog.owner) } })

    return ownerNamesArray;

};

console.log(    getPugOwners([
        {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
        {name: 'Max', breed: 'Pug', owner: 'Izzi'},
        {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
      ]) );

      // returns ['Izzi', 'Anat']
  
console.log(  getPugOwners([
        {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      ]) );

      // returns []
  
console.log(  getPugOwners([]) );

      // returns []

// ---------------------------------------------
// Pluralising Keys

    function pluraliseKeys(obj) {

        let newObject = {};
    
            for (let key in obj) {
    
                let keyLastCharacter = JSON.stringify(key).charAt(JSON.stringify(key).length - 2);
    
                if (typeof obj[key] === "object" && keyLastCharacter !== "s"){
                    newObject[key + "s"] = obj[key]
                }
                else newObject[key] = obj[key]
            }; 
    
            return newObject;
    
        };

console.log ( pluraliseKeys (

        {
            name: 'Tom',
            job: ['writing katas', 'marking'],
            favouriteShop: [
            "Paul's Donkey University",
            "Shaq's Taxidermy Shack",
            "Sam's Pet Shop"
            ]
        }
    )
);

/* should return

{
    name: 'Tom',
    jobs: ['writing katas', 'marking'],
    favouriteShops: [
    "Paul's Donkey University",
    "Shaq's Taxidermy Shack",
    "Sam's Pet Shop"
    ]
}

*/


// ---------------------------------------------
// Getting Word Lengths

function getWordLengths(string) {

    if (string.length > 0){

        let wordsArray = string.split(" ");
        let wordsCount = wordsArray.map( (string) => string.length );
        return wordsCount;
    }

    else return [];

    };

console.log(    getWordLengths('hello') );// returns [5]

console.log(    getWordLengths('hello everyone') );// returns [5, 8]
    
console.log(    getWordLengths('this is a sentence') );// returns [4, 2, 1, 8]
    
console.log(    getWordLengths('') );// returns []


// ---------------------------------------------
// Get Palindromes

function getPalindromes(words) {

    let palindromesArray = [];
    words.forEach( (word) => { if (word.split('').reverse().join('') === word) { palindromesArray.push(word) } } );
    return palindromesArray

    };

    console.log(     getPalindromes(['racecar']) );// returns ['racecar']

    console.log(     getPalindromes(['dog', 'dud', 'car', 'mum']) );// returns ['dud', 'mum']
    
    console.log(     getPalindromes(['apple', 'orange', 'banana']) );// returns []
    
    console.log(     getPalindromes([]) );// returns []

// ---------------------------------------------
// Replace Letters with Xs

function replaceLettersWithXs(string) {

    let newString = "";

    for(let i = 0; i < string.length ;i++){

        if (string[i].match(/[a-zA-Z]/g)){
            newString += "X"
        }
        else newString += string[i];
    }

    return newString

    };

console.log(    replaceLettersWithXs('a') );// returns 'X'

console.log(     replaceLettersWithXs('A') );// returns 'X'
    
console.log(     replaceLettersWithXs('hello') );// returns 'XXXXX'
    
console.log(     replaceLettersWithXs('Hello!') );// returns 'XXXXX!'
    
console.log(     replaceLettersWithXs('Do you like coding?') );// returns 'XX XXX XXXX XXXXXX?'


// ---------------------------------------------
// Please enter a valid mobile number

function validMobileNumber(mobileNumber) {

    for (let i = 0; i < mobileNumber.length; i++){

        if (mobileNumber[i].match(/[0-9]+/) || mobileNumber[i] === "+"){
            continue
        }
        else return false
    }

    if (mobileNumber.slice(0, 2) == "07" && mobileNumber.length == 11){
        return true
    }

    // USING REGEX TO DO THE FUNCTION ABOVE INSTEAD:

    // if ( mobileNumber.match(/^07(\d{9})$/g) ) {
    //     return true
    // }

    if ((mobileNumber.slice(0, 4) == "+447" && mobileNumber.length == 13)){
        return true
    }

    if ((mobileNumber.slice(0, 5) == "00447" && mobileNumber.length == 14)){
        return true
    }

    else return false;

};

console.log(    validMobileNumber('07726') );// returns false

console.log(      validMobileNumber('07123456789') );// returns true
    
console.log(      validMobileNumber('+447123456789') );// returns true
    
console.log(      validMobileNumber('00447123456789') );// returns true
    
console.log(      validMobileNumber('0712345678!') );// returns false


// ---------------------------------------------
// Summing the digits in a string   USING A FOREACH LOOP!!

function sumDigitsFromString(string) {

    let numbersTotal = 0;

    let stringArray = string.split("");
    stringArray.forEach(possibleNumber => {if (possibleNumber.match(/[0-9]+/)) {numbersTotal += Number(possibleNumber)}});

    // for(let i = 0; i < stringArray.length ;i++){

    //     if (stringArray[i].match(/[0-9]+/)){
    //         numbersTotal += Number(stringArray[i])
    //     }
    // }

    return numbersTotal

    };

    sumDigitsFromString('1')// returns 1
    sumDigitsFromString('168')// returns 15
    sumDigitsFromString('he12ll3')// returns 6
    sumDigitsFromString('northcoders')// returns 0

// ---------------------------------------------
// Calling all Williams! FOR LOOP BAAAABYYYY.

function getWilliams(names) {

    let nameToCheck = /\b(Williams)\b/g; 
    let williamsArray = [];

    // for (let i = 0; i < names.length ;i++){
    //     if (names[i].match(nameToCheck)){
    //         williamsArray.push(names[i])
    //     }
    // }

    names.forEach ( name => {  if (name.match(nameToCheck)) {  williamsArray.push(name)  }   }  )

    return williamsArray;

    };

console.log(    getWilliams(['David Williams']) )// returns ['David Williams']

console.log(    getWilliams(['David Williams', 'Sarah Williams']) )// returns ['David Williams', 'Sarah Williams']
    
console.log(    getWilliams(['Kirsty February']) )// returns []
    
console.log(    getWilliams(['Kirsty February', 'Sam Williams']) )// returns ['Sam Williams']
    
console.log(    getWilliams(['William David', 'Cole Williamson']) )// returns []


// ---------------------------------------------
// Getting factorials


function getFactorials(nums) {

    let numsFactorized = [];

    nums.forEach (  number => numsFactorized.push( factorialize(number) )  )

    // for (let i = 0; i < nums.length ; i++){

    //         numsFactorized.push( factorialize(nums[i])  )
    // };

    return numsFactorized;

};

function factorialize (num){

        if (num === 0 || num === 1)
        return 1;

        for (let i = num - 1; i >= 1; i--){
            num *= i;    
        };

        return num;

};


console.log(    getFactorials([3]) )// returns [6]

console.log(    getFactorials([3, 4]) )// returns [6, 24]
    
console.log(    getFactorials([1, 5, 2]) )// returns [1, 120, 2]
    
console.log(    getFactorials([]) )// returns []

// ---------------------------------------------
// Find the largest number

function largestNumber(number) {

    let numbersArray = String(number).split("")
    numbersArray.sort( (a, b) => b - a );
    return Number(numbersArray.join(""));

};

console.log( largestNumber(3) ) // returns 3

console.log( largestNumber(123) )// returns 321

console.log( largestNumber(937846) )// returns 987643

console.log( largestNumber(43) )// returns 43

// ---------------------------------------------
// Enter the matrix

function generateMatrix(number) {

    let result = [];

    for (var i = 0; i < number; i++) {
      result.push([]);

      for (var j = 0; j < number; j++) {
        result[i].push(null);
      };

    };

    return result;  
}



console.log(    generateMatrix(1) )// returns [[null]]

console.log(    generateMatrix(2) )// returns [[null, null], [null, null]]
    
console.log(    generateMatrix(3) )// returns [[null, null, null], [null, null, null], [null, null, null]]


// ---------------------------------------------
// Find the wrong way fruit

function findWrongWayFruit(orchard) {
  
    for (let i = 0; i < orchard.length; i++) {

        if ( (orchard[i] !== orchard[i+1]) && (orchard[i] !== orchard[i+2])  ) {
            return i
        }

        if ( (orchard[i+1] !== orchard[i]) && (orchard[i+1] !== orchard[i+2])  ) {
            return i+1
        }

        if ( (orchard[i+2] !== orchard[i]) && (orchard[i+2] !== orchard[i+1])  ) {
            return i+2
        }
    };

};

console.log( findWrongWayFruit(['apple', 'apple', 'elppa']) )// returns 2

console.log( findWrongWayFruit(['apple', 'elppa', 'apple']) )// returns 1

console.log( findWrongWayFruit(['banana', 'ananab', 'banana', 'banana']) )// returns 1

console.log( findWrongWayFruit(['apple', 'elppa']) )// returns 0 as we can't tell which one is the right way round


// ---------------------------------------------
// DNA Pairs

function dnaPairs(dnaString) {

    let strippedString = dnaString.replace(/[^GCTA]/gi, "").toUpperCase()

    let dnaArray = strippedString.split("");

    for (let i = 0; i < dnaArray.length; i++) {

        if (dnaArray[i] === 'G'){
            dnaArray[i] = 'GC'
        };

        if (dnaArray[i] === 'C'){
            dnaArray[i] = 'CG'
        };

        if (dnaArray[i] === 'T'){
            dnaArray[i] = 'TA'
        };

        if (dnaArray[i] === 'A'){
            dnaArray[i] = 'AT'
        };
    };

    return dnaArray;

};

console.log(    dnaPairs('G') )// returns ['GC']
console.log(    dnaPairs('GAT') )// returns ['GC', 'AT', 'TA']
console.log(    dnaPairs('GYTC') )// returns ['GC', 'TA', 'CG']
console.log(    dnaPairs('gat') )// returns ['GC', 'AT', 'TA']


// ---------------------------------------------
// Tallying Hashtags and Mentions

function tallyHashtagsAndMentions(str) {

    let mentionHashObject = {};

    mentionHashObject.hashtags = str.replace(/[^#}]/g, "").length;

    mentionHashObject.mentions = str.replace(/[^@}]/g, "").length;

    return mentionHashObject;

};

console.log(   tallyHashtagsAndMentions("So excited to start at @northcoders on Monday! #learntocode #codingbootcamp")   )
// returns { hashtags: 2, mentions: 1 }


// --------------------------------------------- Refactoring Code --------------------------------------------- //

// ---------------------------------------------
// Count up by 2

function countsTwo() {
    let counter = 0;
    return counter + 2;
};

console.log (countsTwo());

// ---------------------------------------------
// Tripling Numbers

function tripleNums(nums) {

    // const tripledArr = [];
    // for(let i = 0; i < nums.length; i++){
    //     tripledArr.push(nums[i] * 3);
    // }
    // return tripledArr;

    let tripledArr = [];
    nums.forEach (  number => tripledArr.push( number*3 )  );
    return tripledArr;

};

console.log( tripleNums([1,2,3,4]));

// ---------------------------------------------
// Shout names

function shoutNames(names) {

    // const shoutyArray = [];

    // for(let i = 0; i < names.length; i++){
    //     const upperCaseName = names[i].toUpperCase();
    //     shoutyArray.push(upperCaseName);
    // }

    // return shoutyArray;

    return names.map((name) => name.toUpperCase())
};

console.log(  shoutNames (["franky boy", "trevor tightlips", "marylin mystry"])  );


// ---------------------------------------------
// Is it sweet enough? NEED HELP

let foods1 = [{course: "starter",flavour: "sweet"}, {course: "main",flavour: "no"}, {course: "dessert",flavour: "sweet"}];

function isSweetEnough(foods) {
    
    for(let i = 0; i < foods.length; i++){
        if (foods[i].flavour !== 'sweet') {
            return false;
        };
    };
    return true;

    // foods.forEach(  food =>  {  if (food !== 'sweet') {return false} else return true }  )
    //NO IDEA!!


};

console.log(  isSweetEnough( foods1  )  );

// ---------------------------------------------
// Get Excited!

function getExcited(sentence) {
    // const sentenceArray = sentence.split('');
    // for(let i = 0; i < sentenceArray.length; i++){
    //     if (sentenceArray[i] === '.') {
    //         sentenceArray[i] = '!';
    //     }
    // }
    // return sentenceArray.join('');

    return sentence.replaceAll(".","!");

};

console.log(  getExcited( "this is a test." )  )

// ---------------------------------------------
// Weren't you in Shrek?


function isShrekCharacter(characters) {
    // const shrekCharacters = [];
    // for(let i = 0; i < characters.length; i++){
    //     let character = characters[i];
    //     if (characters[i].movie.includes('Shrek')) {
    //         shrekCharacters.push(characters[i]);
    //     }
    // }
    // return shrekCharacters;

    const shrekCharacters = [];
    characters.forEach ( character => {  if (character.movie.includes('Shrek')){ shrekCharacters.push(character)  }  }  )
    return shrekCharacters;

};


// ---------------------------------------------
// Debugging

function countTheChars(array, char) {

    let count = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] === char) {
        count += 1 }
    }

    return count;
}

console.log (  countTheChars(["a","b","c","d","e","a","a","a"], "a")   )


// ---------------------------------------------
// Add Guests to Party

function addGuestsToParty(invitees) {

    const party = {
        host: 'Paul Copley',
        venue: 'Hatch',
        theme: 'Under the sea',
        guests: [
            {name: 'Rose'},
            {name: 'Eli'}
        ]       
    };

    invitees.forEach( (person) => { if (person.RSVP === 'yes') {party.guests.push({name: person.name} ) } } );

    return party.guests;
}

