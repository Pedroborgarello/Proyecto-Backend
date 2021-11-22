const fs = require('fs');
const makeId = require('../utils')

class Container {
    async save(product) {
        try{
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            if (products.some(prod => prod.title.toLowerCase() === product.title.toLowerCase())) {
                return { status: 'error', message: 'the product already exists'}
            } else {
                let dataObj = {
                    id: makeId(7),
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail
                }
                products.push(dataObj);
                try {
                    await fs.promises.writeFile('./files/products.txt', JSON.stringify(products));
                    return { message: `product successfully, id: ${dataObj.id}`, id: parseInt(dataObj.id)}
                } catch (err) {
                    return {
                        status: 'error', message: 'the product could not be created:' + err}
                }
            }
        } catch {
            let dataObj = {
                id: makeId(7),
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            }
            try {
                await fs.promises.writeFile('./files/products.txt', JSON.stringify([dataObj]))
                return parseInt(dataObj.id)
            } catch (err) {
                return { status: 'error', message: 'the product could not be created:' + err}
            }
        }
    }

    async getById(id) {
        try {
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            let product = products.find(prod => parseInt(prod.id) === parseInt(id))
            if (product) {
                return {product: product}
            } else {
                return { status: 'error', message: 'the product was not found', product: null}
            }
        } catch (err) {
            return { status: 'error', message: 'the product was not found'}
        }
    }

    async getRandom() {
        try {
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            let quantityProducts = products.length;
            let randomIndex = Math.floor(Math.random() * quantityProducts);
            let randomProduct = products[randomIndex];
            return {product: randomProduct}
        } catch (err) {
            return { status: 'error', message: 'the product was not found' }
        }
    }

    async getAll() {
        try {
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            return { product: products }
        } catch (err) {
            return { status: 'error', message: 'no products found'}
        }
    }
    async upgradeById(id, body) {
        let dataObj = {
            id: id,
            title: body.title,
            price: body.price,
            thumbnail: body.thumbnail
        }
        try {
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            let product = products.filter(prod => parseInt(prod.id) !== parseInt(id));
            product.push(dataObj);
            await fs.promises.writeFile('./files/products.txt', JSON.stringify(product));
            return { product: product, message: 'product upgrade successfully' }
        } catch (err) {
            return { status: 'error', message: 'the product was not found' }
        }
    }

    async deleteById(id) {
        try {
            let data = await fs.promises.readFile('./files/products.txt', 'utf-8');
            let products = JSON.parse(data);
            let product = products.filter(prod => parseInt(prod.id) !== parseInt(id));
            await fs.promises.writeFile('./files/products.txt', JSON.stringify(product));
            return { product: product, message: 'product removed successfully' }
        } catch (err) {
            return { status: 'error', message: 'the product was not found' }
        }
    }

    async deleteAll() {
        try {
            let deleteAll = [];
            await fs.promises.writeFile('./files/products.txt', JSON.stringify(deleteAll))
            return { message: 'products removed successfully'}
        } catch (err) {
            return { message: 'action could not be completed'}
        }
    }
}

module.exports = Container;