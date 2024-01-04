import express from 'express';
import router from './router';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsConfig));
app.use(bodyParser.json())
app.use(express.json());
app.use(router);

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(3000)
