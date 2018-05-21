require('dotenv').config();
import * as http from 'http';
import App from './App';
import MongoUtils from './db/MongoUtils';

// Set the port
const port = (process.env.PORT || '');
App.set('port', port);
const server = http.createServer(App);

let mongoDB = new MongoUtils(server, port);

mongoDB.connectToDb();
