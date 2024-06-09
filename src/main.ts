import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import pg from './database';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'main.html'));
});

app.get('/form', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'form.html'));
});

app.listen(port, async () => {
    console.log(`Сервер работает на порте: ${port}`);
    try {
        await pg.query(`CREATE TABLE IF NOT EXISTS parkingplace(
            placeid SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            fullname VARCHAR(255) NOT NULL,
            placetype VARCHAR(255) NOT NULL,
            starttime VARCHAR(255) NOT NULL,
            endtime VARCHAR(255) NOT NULL
        );`);
    } catch (error) {
        console.error("Ошибка при создании таблицы:", error);
    }
});
