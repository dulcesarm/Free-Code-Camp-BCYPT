'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
const bcrypt = require('bcrypt');
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';

// START_ASYNC (dejamos vacío porque esta prueba es sincrónica)
// END_ASYNC

// START_SYNC - coloca el código aquí entre estas notas
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash); // FreeCodeCamp espera que solo imprimas el hash aquí

const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result); // FreeCodeCamp espera "true" aquí
// END_SYNC

// hiiiiiiiiii
// sdfghj

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});