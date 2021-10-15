// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const yoda = {
  id: 'yoda',
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000
};

const darthmaul = {
  id: 'darthmaul',
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200
};

const obiwan = {
  id: 'obiwan',
  name: 'Obi Wan',
  role: 'Jedi',
  age: 300,
  forcePoints: 1200
};
let characters = [yoda, darthmaul, obiwan];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:character', (req, res) => {
  const requested = req.params.character;
  const selected = characters.filter(c => c.id === requested)
  if (selected.length === 0) {
    res.status(404).send()
  } else {
    res.json(selected[0]);
  }
})

app.post('/characters', (req, res) => {
  const request = req.body;
  characters.push(request);
  res.status(201).send()
})

app.delete('/characters/:character', (req, res) => {
  const idToBeDeleted = req.params.character;
  characters = characters.filter(c => c.id !== idToBeDeleted )

  res.send('ok');
})
// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
