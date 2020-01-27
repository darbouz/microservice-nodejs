const mongoose = require("mongoose");

class Cluster {
    constructor() {
        this.mongoose = mongoose;
        this.configModule();
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.mongoose.connect(
                "mongodb+srv://daiki:mql2019mql2020@productsservices-rx9ye.mongodb.net/products?retryWrites=true&w=majority",
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
                err => {
                    if (err) reject(err);
                    else {
                        console.log("connect to products service - success");
                        resolve(this.mongoose.model("Product"));
                    }
                }
            );
        });
    }
    configModule() {
        this.mongoose.model("Product", {
            name: {
                type: String,
                require: true
            },
            price: {
                type: Number,
                require: true
            },
            category: {
                type: String,
                require: true
            }
        });
    }
}

module.exports = new Cluster();
