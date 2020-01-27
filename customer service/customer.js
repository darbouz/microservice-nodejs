const mongoose = require('mongoose');

mongoose.model('Customer', {
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
});

