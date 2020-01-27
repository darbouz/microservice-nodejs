const cluster = require("../Config/Cluster");
const axios = require("axios");

class QueryHandler {
    constructor() {
        this.cluster = cluster;
    }

    getOrders() {
        return new Promise(async (resolve, reject) => {
            const Order = await this.cluster.connect();
            Order.find()
                .then(orders => {
                    resolve(orders);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    saveOrder(order) {
        return new Promise(async (resolve, reject) => {
            const Order = await this.cluster.connect();
            let newOrder = new Order(order);
            newOrder
                .save()
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form saveOrder" + err);
                });
        });
    }

    getOrder(req) {
        return new Promise(async (resolve, reject) => {
            const Order = await this.cluster.connect();
            Order.findById(req.params.id)
                .then(order => {
                    if (order) {
                        axios
                            .get(
                                "http://localhost:4000/customer/" +
                                    order.customerID
                            )
                            .then(response => {
                                var orderObject = {
                                    costumerName: response.data.name,
                                    productName: ""
                                };
                                axios
                                    .get(
                                        "http://localhost:2000/product/" +
                                            order.productID
                                    )
                                    .then(response => {
                                        orderObject.productName =
                                            response.data.name;
                                        resolve(orderObject);
                                    });
                            });
                    } else resolve(res.sendStatus(404));
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    deleteOrder(req) {
        return new Promise(async (resolve, reject) => {
            const Order = await this.cluster.connect();
            Order.findOneAndRemove(req.params.id)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form deleteOrder" + err);
                });
        });
    }
}

module.exports = new QueryHandler();
