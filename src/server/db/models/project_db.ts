import { Document, Schema, Model, model } from "mongoose";
import { Project } from "./project";

export interface IProjectModel extends Project, Document {
}

export var ProjectSchema: Schema = new Schema({
    did: {
        type: String,
        index: true,
        unique: true // Unique index. 
    },
    pubKey: {
        type: String,
        required: true,
        unique: true
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
        unique: true
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
    serviceURI: {
        type: String,
        required: true
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
    webLink: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
}, { strict: false });   // Allow any other fields to also be included over and above the standard ones

ProjectSchema.pre("save", function (this: Project, next) {
    next();
    return this;
});


export const ProjectDB: Model<IProjectModel> = model<IProjectModel>("Project", ProjectSchema);
