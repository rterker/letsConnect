const express = require('express');
const { PORT } = require('./config');

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));