const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
  
});

//app.get('/api/notes', (req, res) => res.json(noteData));



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to upvote`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to upvote`);
  });

// GET request for upvotes
app.get('/api/upvotes', (req, res) => {
    // Inform the client
    res.json(`${req.method} request received to retrieve upvote count`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to retrieve upvote count`);
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
