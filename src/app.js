import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import db from './database/models';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 3030;

app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.FRONTEND_URL
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1', routes);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to MedStem API.' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Path not found.' });
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
  });
});
