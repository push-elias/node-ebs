const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint 1: Hello World
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint 2: Echo
app.post('/echo', (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).send('Error: Message is required');
  }
  res.json({ echo: message });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
