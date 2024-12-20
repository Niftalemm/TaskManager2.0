import express from 'express'; // import express from the express module, express is used to create a server for the application. front-end and back-end communicate through the server.
import dotenv from 'dotenv';// import dotenv from the dotenv module, dotenv is used to load environment variables from a .env file into process.env.
import { connectDB } from './config/db.js'; // import connectDB function from the db.js file in the config folder


dotenv.config();

const app = express();

console.log('MONGO_URI:', process.env.MONGO_URI); // console.log is a function that prints a message to the console

// console.log(process.env.MONOGO_URI); can only access .env variables in the same file as the import statement 

// FUTURE: This could be the tasks page.
// app.get('/products', (req, res) => { // req = request, res = response. req is an object that contains 
// // information about the request being made, such as the URL, headers, and query parameters. 
// // res is an object that contains methods for sending a response to the client.
//   res.send('Hello World!');
// });


app.listen(3000, () => {
  connectDB();
  console.log('Server is running on http://localhost:3000');
});

// MongoDB password: npm run dev