import express from 'express';
import {engine} from 'express-handlebars';
import cors from 'cors';
import Container from './classes/container.js';
import prodRouter from './routes/products.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import upload from './uploader.js';
// const multer = requiere('multer');

const app = express();
const PORT = process.env.PORT||8080;

const server = app.listen(PORT, () => {
    console.log('Server listening on: ' + PORT)
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

const container = new Container();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/products', prodRouter);
app.use((req, res, next) => {
    console.log(new Date().toTimeString().split(" ")[0], req.method, req.url);
    next();
})
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<h1>hola mundo</h1>');
})

app.post('/api/uploadfile', upload.fields([
    {
        name: 'file', maxCount: 1
    },
    {
        name: "documents", maxCount: 3
    }
]), (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        res.status(500).send({ messsage: "No se subió archivo" })
    }
    res.send(files);
})
app.get('/view/products', (req, res) => {
    container.getAll().then(result => {
        let info = result.product;
        let dataObject = {
            products : info
        }
        res.render('products', dataObject)
    })
})
