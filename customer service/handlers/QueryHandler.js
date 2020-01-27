const cluster = require('../Config/Cluster');


class QueryHandler {

    constructor() {
        this.cluster = cluster;
    }

    getCustomers() {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            Customer.find().then((customers) => {
                resolve(customers);
            }).catch(err => {
                reject(err);
            })
        });
    }

    saveCustomer(customer) {
        return new Promise(async (resolve, reject) => {
            const Customer = await this.cluster.connect();
            let newCustomer = new Customer(customer);
            newCustomer.save().then((result) => {
                resolve(result);
            }).catch(err => {
                reject("this error form saveCustomer" + err);
            })
        });
    }
}

module.exports = new QueryHandler();