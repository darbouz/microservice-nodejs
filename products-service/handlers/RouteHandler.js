const queryHandler = require("./QueryHandler");
const mappingHandler = require("./MappingHandler");

class RouteHandler {
    async getProducts(req, res) {
        await res.json(await queryHandler.getProducts());
        console.log("Products getting - success");
    }

    async saveProduct(req, res) {
        await res.send(
            await queryHandler.saveProduct(mappingHandler.mapProduct(req))
        );
        console.log("Product saving - success");
    }

    async getProduct(req, res) {
        await res.json(await queryHandler.getProduct(req));
        console.log("Product getting - success");
    }

    async deleteProduct(req, res) {
        await res.json(await queryHandler.deleteProduct(req));
        console.log("Product deleting - success");
    }
}

module.exports = new RouteHandler();
