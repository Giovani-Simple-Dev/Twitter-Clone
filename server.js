const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let tweets = [];

// Roteamento
app.get('/api/tweets', (req, res) => {
    res.json(tweets);
});

app.post('/api/tweets', (req, res) => {
    const newTweet = req.body;
    tweets.push(newTweet);
    res.json(newTweet);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
