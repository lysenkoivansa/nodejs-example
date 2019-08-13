import * as express from 'express';
import * as path from 'path';
const port = process.env.PORT || 9000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(port, () => {
  console.info(`Listening on port: ${port}`);
});
