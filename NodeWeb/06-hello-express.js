const express = require('express');
const path = require('path');

const app = express();

app.all('/', (req, res) => {
  res.send('Hello');
});

app.all('/hello/:prenom', (req, res) => {
  const prenom = req.params.prenom;
  res.send(`Hello ${prenom}`);
});

app.all('/presentation.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'presentation.html'));
});

app.get('/redirect', (req, res) => {
  res.redirect('http://www.google.fr/');
});

app.get('/api/contacts', (req, res) => {
  res.json([{}, {}]);
});

app.listen(1234, () => {
  console.log('Server started');
});