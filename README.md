# Booksearch-Engine

<!-- screenshot or gif of functioning deployed website -->
This is a Book Search Engine that has been converted from RESTful APIs to a GraphQL API which uses the Apollo Server. This application was built using the MERN Stack - MongoDB database. Express.js Server, React front-end and Node.js. It is set up to allow users to save their favorite book searches on the backend.

# Description

<!-- screenshots of site showing sign in and logged in functionality  -->
The Book Search Engine allows logged-in readers to search for new books to read and to keep a list of their saved book searches. Readers are also allowed to remove a book from their saved book list. When a reader is not logged in, their search results will only feature information of their searched books and not a saved button option. Readers are able to either login or signup on the application, with an account accessing the full features of the website as a non-signed in account is limited to searches only and no save feature.


## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Developed With](#Developed-with)

# Installation
- This application is online and deployed from Heroku. It can be cloned into your local repository from GitHub using the above Code button.
- The following npm packages listed in the `Developed With` tab are required to be installed in both client and server files in order to test the application. Use `npm i` in the Terminal to install them and `npm run start` to run the test server of the website (with installation of concurrently).

## Usage

- The URL of the functional, deployed application. 
https://glacial-forest-16564.herokuapp.com/

- The URL of the GitHub repository, with a unique name and a README describing the project.
https://github.com/trujilml/booksearch-engine 

## Developed With
- MERN Stack:
- MongoDB - A NoSQL database that is an open-source document database allowing data to be formatted easier than a regular SQL database. - https://www.mongodb.com/
- Express.js - Web framework connected with MongoDB, functions routes for the API. - https://expressjs.com/ 
- React.js - Front end framework developed by FaceBook
- Node.js - Back-end development software, JavaScript runtime environment that runs these npm package applications.

- concurrently
- apollo server express
- graphql
- google books search api 

- Mongoose - Schema based solution to model application data, acts as a front-end to MongoDB. - https://mongoosejs.com/
- Heroku - Cloud platform used to deploy this application in a web link from its respective CLI.
- JavaScript - Back-end development code

# Your Task


To fulfill the Challenge, you’ll need to do the following:

MongoDB Atlas database - heroku 
Deploy the application to Heroku.







Back-End Specifications
You’ll need to complete the following tasks in each of these back-end files:

auth.js: Update the auth middleware function to work with the GraphQL API.

server.js: Implement the Apollo Server and apply it to the Express server as middleware.



Schemas directory:


resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

HINT
Use the functionality in the user-controller.js as a guide.

typeDefs.js: Define the necessary Query and Mutation types:

Query type:

me: Which returns a User type.
Mutation type:

login: Accepts an email and password as parameters; returns an Auth type.

addUser: Accepts a username, email, and password as parameters; returns an Auth type.

saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

removeBook: Accepts a book's bookId as a parameter; returns a User type.

User type:

_id

username

email

bookCount

savedBooks (This will be an array of the Book type.)

Book type:

bookId (Not the _id, but the book's id value returned from Google's Book API.)

authors (An array of strings, as there may be more than one author.)

description

title

image

link

Auth type:

token

user (References the User type.)


Front-End Specifications
You'll need to create the following front-end files:

queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

mutations.js:

LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

ADD_USER will execute the addUser mutation.

SAVE_BOOK will execute the saveBook mutation.

REMOVE_BOOK will execute the removeBook mutation.

Additionally, you’ll need to complete the following tasks in each of these front-end files:

App.js: Create an Apollo Provider to make every request work with the Apollo server.

SearchBooks.js:

Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.

Make sure you keep the logic for saving the book's ID to state in the try...catch block!

SavedBooks.js:

Remove the useEffect() Hook that sets the state for UserData.

Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.

Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)

SignupForm.js: Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.

LoginForm.js: Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.

