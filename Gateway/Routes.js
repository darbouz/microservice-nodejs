const httpProxy = require('express-http-proxy');
const Util = require('./utils');
const customerProxy = httpProxy('http://localhost:4000');
const productProxy = httpProxy('http://localhost:2000');
const orderProxy = httpProxy('http://localhost:3000');

class Routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get('/customers-service/*', (req, res) => {
            req.url = Util.subUri(req.url);
            customerProxy(req,res);
        })

        this.app.get('/product-service/*', (req, res) => {
            req.url = Util.subUri(req.url);
            productProxy(req,res);
        })

        this.app.get('/order-service/*', (req, res) => {
            req.url = Util.subUri(req.url);
            orderProxy(req,res);
        })
    }
}

module.exports = Routes;
