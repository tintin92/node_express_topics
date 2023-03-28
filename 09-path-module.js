const path = require("path");

console.log(path.sep)

const filePath = path.join("./content", "subfolder", "test.txt")
console.log(filePath)

// use method base name
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "tests.txt")
console.log(absolute);