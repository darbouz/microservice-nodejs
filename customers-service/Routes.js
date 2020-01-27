const handler = require('./handlers/RouteHandler');

class Routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get('/customers', handler.getCustomers);
        this.app.post('/customers/add', handler.saveCustomer);
    }
}


module.exports = Routes;