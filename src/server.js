const express = require('express');
const cors = require('cors');
// const multer = requiere('multer');
const Container = require('./classes/container');

const app = express();
const PORT = process.env.PORT||8080;

const server = app.listen(PORT, () => {
    console.log('Server listening on: ' + PORT)
})

const container = new Container();
const prodRouter = require('./routes/products');
/*const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage:storage});
*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/products', prodRouter);

app.get('/', (req, res) => {
    res.send('<h1>hola mundo</h1>');
})
/*
app.post('/api/uploadfile', upload.single('file'), (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        res.status(500).send({message: 'no se envio el archivo'})
    }
})*/