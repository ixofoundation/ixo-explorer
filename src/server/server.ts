require('dotenv').config();
import * as http from 'http';
import App from './app';
import MongoUtils from './db/mongo_utils';

// Set the port
const port = (process.env.PORT || 8080);
App.set('port', port);
const server = http.createServer(App);

let mongoDB = new MongoUtils(server, Number(port));

mongoDB.connectToDb();
