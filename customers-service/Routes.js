const handler = require("./handlers/RouteHandler");

class Routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get("/customers", handler.getCustomers);
        this.app.post("/customers/add", handler.saveCustomer);
        this.app.get("/customer/:id", handler.getCustomer);
        this.app.delete("/customer/:id", handler.deleteCustomer);
    }
}

module.exports = Routes;
