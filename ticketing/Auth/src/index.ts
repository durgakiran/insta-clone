import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/singout';
import { signUpRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { clientDB } from './db';
import { DatabaseConnectionError } from './errors/database-connection-error';
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
app.use(
    currentUserRouter, 
    signInRouter, 
    signOutRouter, 
    signUpRouter
);

app.all('*', async (req, res, next) => {
    try {
        throw new NotFoundError(); 
    } catch (err) {
        next(err);
    }
});

app.use(errorHandler);

const start = async () => {
    try {
        await clientDB.connect();
        await clientDB.query(`CREATE TABLE IF NOT EXISTS
            users (email VARCHAR(200) PRIMARY KEY, password VARCHAR NOT NULL, name VARCHAR NOT NULL);`);
        console.log('connection successful');
    } catch (err) {
        console.log(err);
        throw new DatabaseConnectionError();
    }

    // start the server
    app.listen(3000, () => {
        console.log('listening on port 3000!');
    });
}

start();
