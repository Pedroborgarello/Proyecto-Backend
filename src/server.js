const express = require('express');
const Container = require('./classes/container');

const app = express();
const PORT = process.env.PORT||8080;

const server = app.listen(PORT, () => {
    console.log('Server listening on: ' + PORT)
})

const container = new Container();
const prodRouter = require('./routes/products');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', prodRouter);

app.get('/', (req, res) => {
    res.send('<h1>hola mundo</h1>');
})

// app.get('/api/products/:pid', (req, res) => {
//     let id = req.params.pid;
//     id = parseInt(id);
//     container.getById(id).then(result => {
//         res.send(result.product);
//     })
// })

// app.get('/products', (req, res) => {
//     container.getAll().then(result => {
//         res.send(result.product);
//     })
// })

// app.get('/randomProduct', (req, res) => {
//     container.getRandom().then(result => {
//         res.send(result.product);
//     })
// })
