const friends = [
  { name: "Adrian", age: 15, phone: "+675843" },
  { name: "Bob", age: 13, phone: "+264937" },
  { name: "Celia", age: 16, phone: "+837326" },
  { name: "Digor", age: 14, phone: "+159365" },
  { name: "Ela", age: 15, phone: "+859234" },
];

console.log("--------------------------- Task 1 ---------------------------");
const friendsNames = friends.map((friend) => friend.name);

console.log(friendsNames);

const family = [
  { name: "Ola", status: "mother", eyeColor: "blue" },
  { name: "Daniel", status: "father", eyeColor: "green" },
  { name: "Rolana", status: "daughter", eyeColor: "blue" },
  { name: "Ken", status: "son", eyeColor: "green" },
  { name: "Merlin", status: "aunt", eyeColor: "grey" },
  { name: "George", status: "grandfather", eyeColor: "blue" },
  { name: "Bunny", status: "dog", eyeColor: "brown" },
];

console.log("--------------------------- Task 2 ---------------------------");
const blueEyeRelatives = family.filter(
  (relative) => relative.eyeColor === "blue"
);
const greenEyeRelatives = family.filter(
  (relative) => relative.eyeColor === "green"
);
const greyEyeRelatives = family.filter(
  (relative) => relative.eyeColor === "grey"
);
const brownEyeRelatives = family.filter(
  (relative) => relative.eyeColor === "brown"
);
console.log(blueEyeRelatives);
console.log(greenEyeRelatives);
console.log(greyEyeRelatives);
console.log(brownEyeRelatives);

const family2 = [
  { name: "Ola", status: "mother", gender: "woman" },
  { name: "Daniel", status: "father", gender: "man" },
  { name: "Rolana", status: "daughter", gender: "woman" },
  { name: "Ken", status: "son", gender: "man" },
  { name: "Merlin", status: "aunt", gender: "woman" },
  { name: "George", status: "grandfather", gender: "man" },
  { name: "Bunny", status: "dog", gender: "man" },
];

console.log("--------------------------- Task 3 ---------------------------");
const womanRelatives = family2.filter(
  (relative) => relative.gender === "woman"
);
const manRelatives = family2.filter((relative) => relative.gender === "man");

console.log(womanRelatives);
console.log(manRelatives);

const family3 = [
  { name: "Ola", status: "mother", isActive: "ofline" },
  { name: "Daniel", status: "father", isActive: "ofline" },
  { name: "Rolana", status: "daughter", isActive: "online" },
  { name: "Ken", status: "son", isActive: "online" },
  { name: "Merlin", status: "aunt", isActive: "ofline" },
  { name: "George", status: "grandfather", isActive: "ofline" },
  { name: "Bunny", status: "dog", isActive: "ofline" },
];

console.log("--------------------------- Task 4 ---------------------------");

const oflineRelatives = family3.filter(
  (relative) => relative.isActive === "ofline"
);
const onlineRelatives = family3.filter(
  (relative) => relative.isActive === "online"
);

console.log(oflineRelatives);
console.log(onlineRelatives);

const family4 = [
  { name: "Ola", status: "mother", gmail: "ola@gmail.com" },
  { name: "Daniel", status: "father", gmail: "daniel@gmail.com" },
  { name: "Rolana", status: "daughter", gmail: "rolana@gmail.com" },
  { name: "Ken", status: "son", gmail: "ken@gmail.com" },
  { name: "Merlin", status: "aunt", gmail: "merlin@gmail.com" },
  { name: "George", status: "grandfather", gmail: "george@gmail.com" },
  { name: "Bunny", status: "dog", gmail: "bunny@gmail.com" },
];

console.log("--------------------------- Task 5 ---------------------------");

console.log(family4.find((relative) => relative.gmail === "daniel@gmail.com"));
console.log(family4.find((relative) => relative.gmail === "merlin@gmail.com"));

const family5 = [
  { name: "Ola", status: "mother", age: 32 },
  { name: "Daniel", status: "father", age: 34 },
  { name: "Rolana", status: "daughter", age: 9 },
  { name: "Ken", status: "son", age: 7 },
  { name: "Merlin", status: "aunt", age: 27 },
  { name: "George", status: "grandfather", age: 61 },
  { name: "Bunny", status: "dog", age: 2 },
];

console.log("--------------------------- Task 6 ---------------------------");

console.log(
  family5.filter((relative) => relative.age < 18 && relative.age < 40)
);
