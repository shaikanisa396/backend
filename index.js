import express from "express";
import cors from "cors"; // Import cors module
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModule.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Use cors middleware before defining routes
//app.use(cors({
   // origin:'http://localhost:3000',
   // methods:['GET', 'POST', 'PUT', 'DELETE'],
   // allowedHeaders: ['Content-Type'],
//}));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN stack tutorial');
});

app.use('/books', booksRoute);


mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });