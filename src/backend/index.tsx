import * as express from 'express';
import * as path from 'path';
import * as request from 'request';
import * as bodyParser from "body-parser";

const port = process.env.PORT || 9000;
const app = express();
const AUTH_HOST = process.env.AUTH_HOST || '';
const EMPLOYEES_HOST = process.env.EMPLOYEES_HOST || '';

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/auth/token', (req, res) => {
  request(`${AUTH_HOST}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      login: req.body.login,
      password: req.body.password
    },
    json: true
  }).pipe(res);
});

app.post('/employee', (req, res) => {
  const token = req.body.token;

  request(`${EMPLOYEES_HOST}/employee`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).pipe(res);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(port, () => {
  console.info(`Listening on port: ${port}`);
});
