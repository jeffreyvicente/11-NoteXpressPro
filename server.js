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


app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (error,data) => {
        if (error) {
            return console.log(error)
        }
        res.json(JSON.parse(data))
    })
  });

  app.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (error,data) => {
        if (error){
            return console.log(error);
        }
        var notes = JSON.parse(data);
        let userNote = req.body;
        userNote.id = Math.floor(Math.random() * 5000);
        notes.push(userNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        res.json(userNote);
    });
    }); 
  });
  
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});






  