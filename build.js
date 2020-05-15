const {readFileSync, writeFileSync} = require('fs');
const {join} = require('path');

writeFileSync(join(__dirname, `test.js`), `console.log("hello world")`);