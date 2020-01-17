const express = require('express');
const projectDB = require('../data/helpers/projectModel');
const router = express.Router();

//get --> all projects
router.get('/', (req, res) => {});

//post --> using req.body
router.post('/', (req, res) => {});

//get --> single project by id
router.get('/:id', (req, res) => {});

//delete --> by id
router.delete('/:id', (req, res) => {});

//put --> updated using id and req.body
router.put('/:id', (req, res) => {});

module.exports = router;
