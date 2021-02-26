"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class HomeSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            First_name: {
                required: true,
                type: String,
            },
            Last_name: {
                required: false,
                type: String,
            },
            email: {
                required: true,
                type: String,
            },
            mobile_number: {
                required: true,
                type: Number,
            },
            First_address: {
                required: false,
                type: String,
            },
            Second_address: {
                required: false,
                type: String,
            },
            Pincode: {
                required: false,
                type: Number
            }
        };
        super(baseSchema, options);
    }
}
exports.default = HomeSchema;
//# sourceMappingURL=schema.js.map