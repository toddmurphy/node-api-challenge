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
      res.json({ errorMessage: 'Sorry, no projects returned from the server', error });
    });
});

//post --> using req.body
router.post('/', (req, res) => {
  const newProject = req.body;

  projectDB
    .insert(newProject)
    .then(project => {
      res.status(201);
      res.json(project);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no new project created on the server', error });
    });
});

//get --> single project by id
router.get('/:id', (req, res) => {});

//delete --> by id
router.delete('/:id', (req, res) => {});

//put --> updated using id and req.body
router.put('/:id', (req, res) => {});

// get --> projects by action id (save til the end)

module.exports = router;
