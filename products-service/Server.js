const express = require("express");
const http = require("http");

const Routes = require("./Routes");
const AppConfig = require("./Config/app");

class Server {
    constructor() {
        this.app = express();
        this.http = http.Server(this.app);
    }

    configApp() {
        new AppConfig(this.app).includeBodyParser();
    }

    start() {
        const port = process.env.NODE_SERVER_POST || 5000;
        const host = process.env.NODE_SERVER_HOST || "localhost";

        // initialize routes
        new Routes(this.app).init();

        this.http.listen(port, host, () => {
            console.log(`listening on http://${host}:${port}`);
        });
    }
}

module.exports = new Server();
