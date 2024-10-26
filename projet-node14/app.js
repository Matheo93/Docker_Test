// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Je tourne sur Node.js version: ${process.version}`);
});

app.listen(3000, () => {
    console.log('Serveur Node 14 démarré sur le port 3000');
});