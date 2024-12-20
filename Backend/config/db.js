import mongoose from "mongoose";
import dotenv from "dotenv";


// Function to connect to the database
export const connectDB = async () => { // export = to use this function in other files
    //const = constant variable
    // async = function that returns a promise
    // await = waits for the promise to be resolved
    // () => {} = arrow function
    // if (!uri) {
    //     console.error('Error: MONGO_URI is not defined in your .env file.');
    //     process.exit(1);
    //   }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
};