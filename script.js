// 1. SCOPE (var vs let vs const)
console.group("1. Scope & Declarations");

if (true) {
  var blockVar = "I leak outside blocks!";
  let blockLet = "I am trapped in this block!";
  const blockConst = "I am also trapped!";
}
console.log("var:", blockVar); // Works
try {
  console.log(blockLet);
} catch (e) {
  console.log("let: Trapped! (ReferenceError)");
}

// const cannot be reassigned
const totalPoints = 100;
// totalPoints = 200; // Uncaught TypeError

console.groupEnd();

// 2. ARROW FUNCTIONS & ES6 FEATURES

console.group("2. Arrow Functions & Template Literals");

// Old way
function regularSayHello(name) {
  return "Hello " + name;
}

// ES6 Arrow Function + Template Literals (Backticks)
const arrowSayHello = (name) => `Hello, ${name}! Welcome to ES6.`;
console.log(arrowSayHello("Developer"));

console.groupEnd();

// 3. OBJECTS (Destructuring & Shorthand)

console.group("3. Objects");

const user = {
  username: "Nofisat",
  age: 25,
  country: "Nigeria",
};

// Object Destructuring
const { username, country } = user;
console.log(`User ${username} lives in ${country}.`);

console.groupEnd();

// 4. ARRAY METHODS (map, filter, reduce, forEach)

console.group("4. Array Methods");

const numbers = [1, 2, 3, 4, 5];

// forEach: Just loops through (returns nothing)
numbers.forEach((num) => console.log(`Looping item: ${num}`));

// map: Transforms each element into a new array
const doubled = numbers.map((num) => num * 2);
console.log("Mapped (Doubled):", doubled);

// filter: Keeps elements that pass a condition
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Filtered (Evens):", evens);

// reduce: Combines all values into a single result
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Reduced (Total Sum):", sum);

console.groupEnd();

// 1. Define a simple array of study topics or data
const topics = [
  "HTML5 Layouts",
  "Tailwind Utilities",
  "JavaScript Scope",
  "Array Mapping",
  "DOM Injection",
];

// PRESENTATION THROUGH CONSOLE

console.group("Presentation of Learning Outcome: Arrays");
console.log("Original Array Data:", topics);

// Using .map() to format the data in the console
const upperCaseTopics = topics.map((topic) => topic.toUpperCase());
console.log("Processed Array (Uppercase):", upperCaseTopics);
console.groupEnd();

// IMPLEMENTATION ON HTML WEBPAGE

// Target the empty <ul> container in HTML
const listContainer = document.getElementById("fruit-list");

// Clear any existing placeholder content
listContainer.innerHTML = "";

// Loop through the array and inject each item onto the webpage dynamically
topics.forEach((topic, index) => {
  // Create a new HTML list item element
  const listItem = document.createElement("li");

  // Add Tailwind utility classes to style it beautifully on the fly
  listItem.className =
    "bg-cyan-50 text-cyan-900 px-4 py-2 rounded-lg border border-cyan-200 shadow-2xs";

  // Set the text content inside the tag
  listItem.textContent = `${index + 1}. ${topic}`;

  // Append the newly created tag intoHTML container
  listContainer.appendChild(listItem);
});
