
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};



// import express from 'express';
// import { dbConnection } from 'database'; // Adjust the path accordingly

// const app = express();
// app.use(express.json());

// // Connect to the database
// dbConnection();

// // Define the route
// app.post('/reservation/send', (req, res) => {
//     // Your route logic here
//     res.status(200).send('Reservation request received');
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
