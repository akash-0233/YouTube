// require('dotenv').config();
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
const app = express();
dotenv.config();

connectDB();

// (async () => {

//   try {
//     await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     app.on("error", (error) => {
//       console.log("Error in app.on : ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("error in catch : ", error);
//     throw error;
//   }
// })();
