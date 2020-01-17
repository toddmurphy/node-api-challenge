const express = require('express');
const projectDB = require('../data/helpers/projectModel');
const router = express.Router();

//get --> all projects
router.get('/', (req, res) => {
  projectDB
    .get()
    .then(projects => {
      res.status(200);
      res.json(projects);
    })
    .catch(error => {
      res.status(500);
      res.json({ message: 'Sorry, no projects returned from the server', error });
    });
});

//post --> using req.body
router.post('/', (req, res) => {});

//get --> single project by id
router.get('/:id', (req, res) => {});

//delete --> by id
router.delete('/:id', (req, res) => {});

//put --> updated using id and req.body
router.put('/:id', (req, res) => {});

// get --> projects by action id (save til the end)

module.exports = router;
