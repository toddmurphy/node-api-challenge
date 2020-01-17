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

//get --> single project by id --> no helper function for this but wanted to see if it works but it doesnt work
router.get('/:id', (req, res) => {
  const projectID = req.params.id;

  projectDB
    .get(projectID)
    .then(project => {
      if (project) {
        res.status(201);
        res.status(project);
      } else {
        res.status(401);
        res.json({ message: 'Sorry, no project with that id' });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no project by that id returned from server', error });
    });
});

//delete --> by id
router.delete('/:id', (req, res) => {
  const deleteID = req.params.id;

  projectDB
    .remove(deleteID)
    .then(deletedProject => {
      if (deleteID) {
        res.status(200);
        res.json(deletedProject);
      } else {
        res.status(400);
        res.json({ message: 'Sorry, project not deleted' });
      }
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, project not deleted from server', error });
    });
});

//put --> updated using id and req.body
router.put('/:id', (req, res) => {
  const projectID = req.params.id;
  const updatedProject = req.body;

  projectDB
    .update(projectID, updatedProject)
    .then(project => {
      res.status(200);
      res.json(project);
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, project not updated on the server', error });
    });
});

// get --> projects by action id
router.get('/:id/actions', (req, res) => {
  const ID = req.params.id;

  projectDB
    .getProjectActions(ID)
    .then(action => {
      res.status(200);
      res.json({ action });
    })
    .catch(error => {
      res.status(500);
      res.json({ errorMessage: 'Sorry, no actions returned on project from the server', error });
    });
});

module.exports = router;
