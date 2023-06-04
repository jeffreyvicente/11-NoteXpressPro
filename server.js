const express = require('express');
const path = require('path');
const fs = require('fs');


const PORT = 3001;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
  
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

// GET request for upvotes
app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json1"), "utf8", (error,notes) => {
        if (error) {
            return console.log(error)
        }
        res.json(JSON.parse(notes))
    })
  });

  
  
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
