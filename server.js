import express from 'express';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();

app.use(cors());
app.use(bodyParser({ extended: true }));
app.use(bodyParser.json({extended: true}));
app.use('/', router);


const PORT = process.env.PORT || 8000;

dbConnection();
//backend ka server

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));




