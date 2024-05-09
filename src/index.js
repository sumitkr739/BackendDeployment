// import mongoose from "mongoose";
// import { DB_NAME } from "./utils/constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// require("dotenv").config();
// const { log } = require("console");
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();
// const port = 4000;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// app.use(bodyParser.urlencoded());

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listing on port ${port}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello World!</h1>");
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.post("/api/v1/login", (req, res) => {
//   res.send("Done");
//   console.log(req.body);
// });
