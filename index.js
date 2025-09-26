//simple express server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.send('Hello World in Docker!');
    res.send('Hello World in Kubernetes!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});