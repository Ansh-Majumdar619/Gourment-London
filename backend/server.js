
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());

app.post('/api/v1/reservation/send', (req, res) => {
  res.json({ message: 'Reservation received!' });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});




// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// })