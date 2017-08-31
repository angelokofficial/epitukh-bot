var replace = require("replace");
replace({
  regex: "var isSpin = true;",
  replacement: "var isSpin = false;",
  paths: ['core.js'],
  recursive: false,
  silent: false,
});