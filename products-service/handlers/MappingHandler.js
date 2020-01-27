class MappingHandler {
    static mapProduct(req) {
        console.log(req.body.name);
        return {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
    }
}

module.exports = MappingHandler;
