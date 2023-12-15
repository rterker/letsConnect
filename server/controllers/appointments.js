const fs = require('fs');
const path = require('path');

let users = fs.readFileSync(path.join(__dirname, '../data/data-dev.json'), 'utf-8');
users = JSON.parse(users);

