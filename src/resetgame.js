var replace = require("replace");
replace({
  regex: "var isSpin = true;",
  replacement: "var isSpin = false;",
  paths: ['src/bulba.js'],
  recursive: false,
  silent: false,
});
console.log('[I] BOTD has been reseted')