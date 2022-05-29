const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

const userRouter = require('./routes/user');
const commentRouter = require('./routes/comment');

app.use(bodyParser.urlencoded()); // the syntax of query params
// parse application/json
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/comment', commentRouter);

app.post('/post', (req, res) => {
  res.send('Hi from post POST');
});

app.get('/post', (req, res) => {
  res.send('Hi from post GET');
});

app.listen(port, function () {
  console.log('Server is running');
});
