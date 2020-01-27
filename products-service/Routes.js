const handler = require("./handlers/RouteHandler");

class Routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get("/products", handler.getProducts);
        this.app.post("/products/add", handler.saveProduct);
        this.app.get("/product/:id", handler.getProduct);
        this.app.delete("/product/:id", handler.deleteProduct);
    }
}

module.exports = Routes;
