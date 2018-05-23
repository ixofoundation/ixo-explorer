import { Document, Schema, Model, model } from "mongoose";
import { Project } from "./project";

export interface IProjectModel extends Project, Document {
}

export var ProjectSchema: Schema = new Schema({
    txHash: {
        type: String,
        index: true,
        unique: true
    },
    senderDid: {
        type: String,
        index: true,
    },
    projectDid: {
        type: String,
        index: true,
    },
    pubKey: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: false
    },
    impactAction: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        index: true,
    },
    country: {
        type: String,
        index: true,
        required: true
    },
    sdgs: {
        type: [String],
        required: true
    },
    impactsRequired: {
        type: Number,
        required: true
    },
    claimTemplate: {
        type: String,
        required: false,
        default: 'default'
    },
    socialMedia: {
        facebookLink: {
            type: String,
            required: false,
            default: ''
        },
        instagramLink: {
            type: String,
            required: false,
            default: ''
        },
        twitterLink: {
            type: String,
            required: false,
            default: ''
        }
    },
    serviceEndpoint: {
        type: String,
        required: false
    },
    imageLink: {
        type: String,
        required: false
    }
}, { strict: false });

ProjectSchema.pre("save", function (this: Project, next) {
    next();
    return this;
});


export const ProjectDB: Model<IProjectModel> = model<IProjectModel>("Project", ProjectSchema);
