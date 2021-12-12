import express from 'express';
import Container from '../classes/container.js';
import upload from '../uploader.js'
import { io } from '../server.js'


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

router.post('/',upload.single('image'), (req, res) => {
    let file = req.file;
    let body = req.body;
    body.thumbnail = req.protocol+"://"+req.hostname+":8080"+'/images/'+file.filename;
    container.save(body).then(result => {
        res.send(result.message);
        
        if (result.status === "success") {
            container.getAll().then(result => {
                io.emit('update', result)
            })
        }
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