var replace = require("replace");
replace({
  regex: "var isSpin = false;",
  replacement: "var isSpin = true;",
  paths: ['core.js'],
  recursive: false,
  silent: false,
});
console.log('activated');