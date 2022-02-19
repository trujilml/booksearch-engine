# Book Search Engine

![Booksearch-Engine GIF](./demo/booksearch-enginegif.gif)

This is a Book Search Engine that has been converted from RESTful APIs to a GraphQL API which uses the Apollo Server. This application was built using the MERN Stack - MongoDB database. Express.js Server, React front-end and Node.js. It is set up to allow users to save their favorite book searches on the backend.

# Description
Readers are able to either login or signup on this Book Search Engine, with an account accessing the full features of the website while those with not logged in or with no account are limited to searches only and cannot save their searched books. 

Logged-in readers are able to search for new books to read and to keep a list of their saved book searches. Readers are also allowed to remove a book from their saved book list. 

![Booksearch-Engine Screenshot 1](./demo/signin-savedbooks.png)
![Booksearch-Engine Screenshot 2](./demo/booksearchengine-signin.png)

When a reader is not logged in, their search results will only feature information of their searched books. There will be no save button to save their books nor a list to review their saved books.

![Booksearch-Engine Screenshot 3](./demo/notsignin-searchonly.png)

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

- Assistant Packages to help front-end and back-end development: 
- Concurrently - NPM package that allows multiple servers to run from a single command-line interface.
- Apollo-Server-Express - Open source GraphQL server that integrates GraphQL into Express.json. 
- Apollo/Client - Package that makes requests from the React front end to the GraphQL API.
- GraphQL - Query language for APIs and runtime for fulfilling queries with existing data.
- React Router - Collection of naviation components that compose with the application to allow multi-page functionality. 
- Google Books Search API - Used to search books online with tailored results following the API format
- JWT-decode - To decode JSON web token assets used to authenticate users
- Mongoose - Schema based solution to model application data, acts as a front-end to MongoDB. - https://mongoosejs.com/
- Heroku - Cloud platform used to deploy this application in a web link from its respective CLI.
- JavaScript - Back-end development code