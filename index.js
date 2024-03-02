// CURD Operation Node JS

const fs = require("fs");

// Create Folder
fs.mkdirSync("Greetings");

// Create File
fs.writeFileSync("Greetings/bio.txt", "Welcome to the World of Matrix!");

// Add Data
fs.appendFileSync(
  "Greetings/bio.txt",
  " Are you ready to see the reality we live in now?"
);

// Read Data
// without getting the Buffer data at first.
// we need to use file encoding
const data = fs.readFileSync("Greetings/bio.txt", "utf-8");
console.log(data);

// Update File
fs.renameSync("Greetings/bio.txt", "Greetings/myBio.txt");

// Delete File
fs.unlinkSync("Greetings/myBio.txt");
