const handler = require("./handlers/RouteHandler");

class Routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get("/orders", handler.getOrders);
        this.app.post("/orders/add", handler.saveOrder);
        this.app.get("/order/:id", handler.getOrder);
        this.app.delete("/order/:id", handler.deleteOrder);
    }
}

module.exports = Routes;
