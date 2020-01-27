const mongoose = require('mongoose');

class Cluster {

    constructor() {
        this.mongoose = mongoose;
        this.configModule();
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.mongoose.connect(
                "mongodb+srv://darbouz:galaxy-123@cluster0-9sdho.mongodb.net/test?retryWrites=true&w=majority",
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
                (err) => {
                if(err) reject(err);
                else {
                    console.log("connect to customer service - success");
                    resolve(this.mongoose.model('Customer'));
                }
            })
        });

    }
    configModule() {
        this.mongoose.model('Customer', {
            name : {
                type : String,
                require : true
            },
            age : {
                type: Number,
            },
            address : {
                type: String,
                require: true
            }
        })
    }
}

module.exports = new Cluster();