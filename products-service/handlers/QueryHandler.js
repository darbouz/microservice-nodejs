const cluster = require("../Config/Cluster");

class QueryHandler {
    constructor() {
        this.cluster = cluster;
    }

    getProducts() {
        return new Promise(async (resolve, reject) => {
            const Product = await this.cluster.connect();
            Product.find()
                .then(products => {
                    resolve(products);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    saveProduct(product) {
        return new Promise(async (resolve, reject) => {
            const Product = await this.cluster.connect();
            let newProduct = new Product(product);
            newProduct
                .save()
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form saveProduct" + err);
                });
        });
    }

    getProduct(req) {
        return new Promise(async (resolve, reject) => {
            const Product = await this.cluster.connect();
            Product.findById(req.params.id)
                .then(product => {
                    if (product) resolve(product);
                    else resolve(res.sendStatus(404));
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    deleteProduct(req) {
        return new Promise(async (resolve, reject) => {
            const Product = await this.cluster.connect();
            Product.findOneAndRemove(req.params.id)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form deleteProduct" + err);
                });
        });
    }
}

module.exports = new QueryHandler();
