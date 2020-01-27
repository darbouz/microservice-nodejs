const queryHandler = require("./QueryHandler");
const mappingHandler = require("./MappingHandler");

class RouteHandler {
    async getCustomers(req, res) {
        await res.json(await queryHandler.getCustomers());
        console.log("customers getting - success");
    }

    async saveCustomer(req, res) {
        await res.send(
            await queryHandler.saveCustomer(mappingHandler.mapCustomer(req))
        );
        console.log("customer save - success");
    }
}

module.exports = new RouteHandler();
