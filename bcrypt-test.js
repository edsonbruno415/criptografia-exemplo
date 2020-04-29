const bscryptjs = require('bcryptjs');
const salt = bscryptjs.genSaltSync(10);
const hash = bscryptjs.hashSync('devpleno', salt);

console.log(salt, hash);