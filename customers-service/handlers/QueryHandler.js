const cluster = require("../Config/Cluster");

class QueryHandler {
    constructor() {
        this.cluster = cluster;
    }

    getCustomers() {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            Customer.find()
                .then(customers => {
                    resolve(customers);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    saveCustomer(customer) {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            let newCustomer = new Customer(customer);
            newCustomer
                .save()
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form saveCustomer" + err);
                });
        });
    }

    getCustomer(req) {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            Customer.findById(req.params.id)
                .then(customer => {
                    if (customer) resolve(customer);
                    else resolve(res.sendStatus(404));
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    deleteCustomer(req) {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            Customer.findOneAndRemove({ _id: req.params.id })
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject("this error form deleteCustomer" + err);
                });
        });
    }
}

module.exports = new QueryHandler();
