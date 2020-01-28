const express = require('express');
const http = require('http');

const Routes = require('./Routes');

class Server {
    constructor() {
        this.app = express();
        this.http = http.Server(this.app);
    }

    start() {
        const port = process.env.NODE_SERVER_POST || 8000;
        const host = process.env.NODE_SERVER_HOST || 'localhost';

        // initialize routes
        new Routes(this.app).init();

        this.http.listen(port, host, () => {
            console.log(`listening on http://${host}:${port}`);
        });
    }
}

module.exports = new Server();