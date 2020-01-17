const express = require('express');
const server = express();

server.use(express.json());

// server.use('/api/projects'); //add projectsRouter
// server.use('/api/actions'); //add actionsRouter

server.get('/', (req, res) => {
  res.send(`<h2>Sprint challenge server and api working</h2>`);
});

module.exports = server;
