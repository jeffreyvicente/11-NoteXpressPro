# NoteXpressPro

## Description

The NoteXpress Pro is a web-based application that allows users to create and manage notes. The application offers a user-friendly interface that allows you to create and edit notes effortlessly. The application allows you to save notes and return to the notes at a later time.  

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-up](#mock-up)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

To use the Note-Taker Application, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install the required dependencies.
4. Run npm start to start the application.
5. Access the application in your web browser at `http://localhost:3000.`


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Preview

View live preview hosted on [Heroku](https://notexpress-pro.herokuapp.com/notes

![alt text](/media/readme-screenshot-1.png)

![alt text](/media/readme-screenshot-2.png)



## Features
The NoteExpress Pro has the following features:

- Create new notes with a title and text content.
- Save notes to persist them for future use.
- Delete notes to remove cluttler off the screen. (COMING SOON)


## Technologies Used
- HTML
- CSS
- Node.js
- Express.js
- Path module
- fs module

