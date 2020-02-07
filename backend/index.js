const express = require('express');

const cors = require('cors');

const app = express();

const port = 8080;

app.use(express.json());

app.use(cors());

const Vigenere = require('caesar-salad').Vigenere;

app.post('/encode/', (req, res) => {
  res.send(Vigenere.Cipher(req.body.password).crypt(req.body.message));
});

app.post('/decode/', (req, res) => {
  res.send(Vigenere.Decipher(req.body.password).crypt(req.body.message));
});

app.listen(port, () => {
  console.log('Check ' + port);
});