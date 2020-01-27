const mongoose = require("mongoose");

class Cluster {
    constructor() {
        this.mongoose = mongoose;
        this.configModule();
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.mongoose.connect(
                "mongodb+srv://daiki:mql2019mql2020@orders-nrdsu.mongodb.net/orders?retryWrites=true&w=majority",
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
                err => {
                    if (err) reject(err);
                    else {
                        console.log("connect to orders service - success");
                        resolve(this.mongoose.model("Order"));
                    }
                }
            );
        });
    }
    configModule() {
        this.mongoose.model("Order", {
            customerID: {
                type: mongoose.SchemaTypes.ObjectId,
                require: true
            },
            productID: {
                type: mongoose.SchemaTypes.ObjectId,
                require: true
            },
            initialDate: {
                type: Date,
                require: true
            },
            deliveryDate: {
                type: Date,
                require: true
            }
        });
    }
}

module.exports = new Cluster();
