import { ProjectDB } from "../db/models/project_db";

declare var Promise: any;

export class ProjectHandler {

    create = (args: any) => {
        return new Promise((resolve: Function, reject: Function) => {
            return ProjectDB.create(args, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    /* list = (args: any) => {
        var request = new Request(args);
        return this.find(request.data);
    }
 */
}

