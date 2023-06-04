//Imports the Express framework
const express = require('express');

//Imports the path module
const path = require('path');

//Imports the fs module
const fs = require('fs');

//Sets the port number for the project
const PORT = process.env.PORT || 3001;

//Creates an instance of express
const app = express();

//Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

//Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
app.get('/notes', (req, res) => {
    //Sents a response to the notes.html
    res.sendFile(path.join(__dirname, './public/notes.html'));
    //console.log(res);

  
});

//Defult HTML route
app.get("/", (req, res) => {
    //Sents a response to the index.html
    res.sendFile(path.join(__dirname, "./public/index.html"))
    //console.log(res);
});


app.get("/api/notes", (req, res) => {
    //Reads the contents of the db.json file
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (error,data) => {
        if (error) {
            return console.log(error)
        }
        //Parse the data as JSON and send it as the response
        res.json(JSON.parse(data))
        //console.log((JSON.parse(data)));
    })
  });

  app.post('/api/notes', (req, res) => {
    //Reads the contents of the db.json file
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (error,data) => {
        if (error){
            return console.log(error);
        }
        //Parse the data as JSON
        var notes = JSON.parse(data);


        let dataNote = req.body;
        //Create a random ID for the new note. Max limit is 1000 notes
        dataNote.id = Math.floor(Math.random() * 1000);
        //Adds notes to the array
        notes.push(dataNote);
        //Write the added notes array to the db.json file
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        //Send the updated note as the response
        res.json(dataNote);
        
    });
    }); 
  });
  
//Starts the server.
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});






  