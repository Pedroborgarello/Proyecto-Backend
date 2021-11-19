const express = require('express');
const router = express.Router();

const Container = require('../classes/container');
const container = new Container();

router.get('/', (req,res) => {
    container.getAll().then(result => {
        res.send(result.product);
    })
})

router.get('/:pid', (req, res) => {
    let id = req.params.pid;
    id = parseInt(id);
    container.getById(id).then(result => {
        res.send(result.product);
    })
})

module.exports = router;