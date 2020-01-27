const queryHandler = require("./QueryHandler");
const mappingHandler = require("./MappingHandler");

class RouteHandler {
    async getOrders(req, res) {
        await res.json(await queryHandler.getOrders());
        console.log("Orders getting - success");
    }

    async saveOrder(req, res) {
        await res.send(
            await queryHandler.saveOrder(mappingHandler.mapOrder(req))
        );
        console.log("Order saving - success");
    }

    async getOrder(req, res) {
        await res.json(await queryHandler.getOrder(req));
        console.log("Order getting - success");
    }

    async deleteOrder(req, res) {
        await res.json(await queryHandler.deleteOrder(req));
        console.log("Order deleting - success");
    }
}

module.exports = new RouteHandler();
