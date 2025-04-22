// const xyzImports = require("./xyz.js");

// const {add, multiply} = xyzImports;

const {add, multiply} = require("./calculate");
const data = require("./data.json");
add(1, 2);

multiply(10,20)


console.log(data);