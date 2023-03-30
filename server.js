const express = require('express');
const app = express();

const port = 3000;

// Dummy data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Jignesh' },
];

// Define a GET endpoint that returns the dummy data
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});