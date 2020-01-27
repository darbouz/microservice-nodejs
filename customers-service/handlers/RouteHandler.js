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

    async getCustomer(req, res) {
        await res.json(await queryHandler.getCustomer(req));
        console.log("Customer getting - success");
    }

    async deleteCustomer(req, res) {
        await res.json(await queryHandler.deleteCustomer(req));
        console.log("Customer deleting - success");
    }
}

module.exports = new RouteHandler();
