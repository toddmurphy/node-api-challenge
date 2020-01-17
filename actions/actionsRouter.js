const express = require('express');
const actionsDB = require('../data/helpers/actionModel');
const router = express.Router();

//get --> all projects
router.get('/', (req, res) => {
  actionsDB
    .get()
    .then(actions => {
      res.status(200);
      res.json(actions);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no actions returned from the server', error });
    });
});

// post --> new project
router.post('/', (req, res) => {});

// delete --> delete project by id
router.delete('/:id', (req, res) => {});

// put --> update project by id and req.body
router.put('/:id', (req, res) => {});

module.exports = router;
