require('dotenv').config();
const mongoose = require('mongoose');
import * as http from 'http';
import { MONGODB_URI } from '../util/secrets';

export default class MongoUtils {

    server: http.Server;
    port: any;

    constructor(server: http.Server, port: number) {
        this.server = server;
        this.port = this.normalizePort(port);
        this.connectToDb = this.connectToDb.bind(this);
        this.onListening = this.onListening.bind(this);
        this.onError = this.onError.bind(this);
    }

    connectToDb() {
        var self = this;
        require('mongoose').Promise = global.Promise;
        mongoose.connect(MONGODB_URI || '');
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Mongo connection error: Cannot start'));
        db.once('open', function () {
            console.log('MongDB connected!');

            // Once connected listen on server
            self.server.listen(self.port);
            self.server.on('error', self.onError);
            self.server.on('listening', self.onListening);
        });

        process.on('SIGTERM', function () {
            db.close();
            self.server.close(function () {
                process.exit(0);
            });
        });
    }

    onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') {
            throw error;
        }
        let bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch (error.code) {
            case 'EACCES':
                console.log(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    onListening(): void {
        let addr = this.server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening on ${bind}`);
    }

    normalizePort(val: number | string): number | string | boolean {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) {
            return val;
        } else if (port >= 0) {
            return port;
        } else {
            return false;
        }
    }
}