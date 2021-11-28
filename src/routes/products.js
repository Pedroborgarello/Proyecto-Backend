import express from 'express';
import Container from '../classes/container.js';
const router = express.Router();

const container = new Container();

router.get('/', (req,res) => {
    container.getAll().then(result => {
        res.send(result);
    })
})

router.get('/:pid', (req, res) => {
    let id = req.params.pid;
    id = parseInt(id);
    container.getById(id).then(result => {
        res.send(result.product);
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    container.save(body).then(result => {
        res.send(result.message);
    })
})

router.put('/:pid', (req, res) => {
    let id = req.params.pid;
    let body = req.body;
    container.upgradeById(id, body).then(result => {
        res.send(result.message);
    })
})

router.delete('/:pid', (req, res) => {
    let id = req.params.pid;
    container.deleteById(id).then(result => {
        res.send(result.message);
    })
})

export default router;