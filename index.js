// Iteration 1: Names and Input

let hacker1 = "Biljana";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Biljana";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const driver = hacker1.length;
const navigator = hacker2.length;
let equalLength;

if (driver > navigator) {
  console.log(`The driver has the longest name, it has ${driver} characters`);
} else if (navigator > driver) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${driver} characters`);
}

// Iteration 3: Loops

// 3.1
hacker1 = hacker1.toUpperCase().split("").join(" ");

console.log(hacker1.toUpperCase().split("").join(" "));

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
}

// 3.2
for (let i = hacker2.length - 1; i > 0; i--) {
  console.log(hacker2[i]);
}

// 3.3
hacker1 = "Biljana";
hacker2 = "Joseph";

let newHackerVariable = hacker1.localeCompare(hacker2);

if (newHackerVariable === -1) {
  console.log(`${hacker1} goes first `);
} else if (newHackerVariable === 1) {
  console.log(`Yo, ${hacker2} goes First, definetly`);
} else if (newHackerVariable === 0) {
  console.log("What?! You both have the same name?");
}

console.log(newHackerVariable);

// Bonus Time!
// Bonus 1

let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet dapibus enim. Etiam at efficitur tellus. Aenean laoreet vestibulum erat in auctor. Cras non tellus lacus. Duis lacinia ultricies risus, at vehicula enim aliquam egestas. Ut nunc quam, blandit at consequat ut, gravida eu metus. Phasellus sollicitudin tellus non convallis lacinia. Praesent dignissim odio sed metus posuere, a scelerisque nibh pretium. Vivamus at nisl urna.

Aenean scelerisque, justo dignissim fringilla venenatis, ante metus consectetur diam, non viverra neque est id ante. Etiam ut pellentesque nunc. Curabitur lacinia auctor neque, a bibendum dolor blandit et. Morbi at nisi vehicula, blandit ante eu, tempus leo. Donec consectetur, turpis ut varius pulvinar, magna erat faucibus dui, nec vulputate nulla purus sit amet enim. Duis augue turpis, ultrices ut velit at, consectetur pretium augue. Nullam eget elit elementum, ornare mauris eget, auctor sem. Phasellus eu odio orci. Praesent metus mi, dignissim at libero non, gravida rutrum ante. Cras vitae odio et ipsum vehicula dignissim et et neque. Curabitur euismod et nibh a blandit. Suspendisse potenti.

Proin consequat quis ligula tincidunt pellentesque. Integer at efficitur neque, non placerat dui. Suspendisse laoreet velit non lacus pretium, sed imperdiet risus tristique. Morbi in leo hendrerit, bibendum felis ac, congue arcu. Donec nisl lacus, aliquam id egestas et, bibendum eu lacus. Curabitur ac nibh consequat urna dignissim tincidunt. Phasellus in orci sit amet odio porttitor scelerisque ac sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae`;

console.log(longText.split(" ").length);

console.log(longText.split("et").length);

// Bonus 2:
