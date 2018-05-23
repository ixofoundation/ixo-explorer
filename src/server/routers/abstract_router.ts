import { Router } from 'express';
import * as logger from '../util/logger';

const jayson = require('jayson/promise');

export abstract class AbstractRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post('/', jayson.server(this.setup()).middleware());
    }

    register(config: any, method: string, handlerFunction: Function) {
        config[method] = (args: any) => {
            return new Promise((resolve: Function, reject: Function) => {
                handlerFunction(args)
                    .then(
                        (data: any) => resolve(data))
                    .catch((err: Error) => {
                        logger.default.error(err.message, err);
                        reject(jayson.server().error(null, err.message));
                    });
            });
        };
    }
    setup() { }
}