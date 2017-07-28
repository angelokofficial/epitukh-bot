var replace = require("replace");
replace({
  regex: "var isSpin = false;",
  replacement: "var isSpin = true;",
  paths: ['test.js'],
  recursive: false,
  silent: false,
});
console.log('activated');