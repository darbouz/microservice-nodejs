
const bodyParser = require('body-parser');

class AppConfig {
    constructor(app) {
        this.app = app;
    }

    includeBodyParser() {
        this.app.use(bodyParser.urlencoded());
        this.app.use(bodyParser.json());
    }
}

module.exports = AppConfig;