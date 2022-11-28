const path = require('path');

const filePatch = path.join('/content/','subfolder','test.txt')
console.log(filePatch);

const base = path.basename(filePatch)
console.log(base);