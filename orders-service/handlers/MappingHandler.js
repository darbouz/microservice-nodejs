const mongoose = require("mongoose");

class MappingHandler {
    static mapOrder(req) {
        return {
            customerID: mongoose.Types.ObjectId(req.body.customerID),
            productID: mongoose.Types.ObjectId(req.body.productID),
            initialDate: req.body.initialDate,
            deliveryDate: req.body.deliveryDate
        };
    }
}

module.exports = MappingHandler;
