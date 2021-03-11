"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class HomeSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            first_name: {
                required: true,
                type: String,
            },
            last_name: {
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
            first_address: {
                required: false,
                type: String,
            },
            second_address: {
                required: false,
                type: String,
            },
            pincode: {
                required: false,
                type: Number
            }
        };
        super(baseSchema, options);
    }
}
exports.default = HomeSchema;
//# sourceMappingURL=schema.js.map