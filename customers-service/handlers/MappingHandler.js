class MappingHandler {
    static mapCustomer(req) {
        console.log(req.body.name);
        return {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        };
    }
}

module.exports = MappingHandler;
