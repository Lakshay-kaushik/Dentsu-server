"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class UserSchema extends VersionableSchema_1.default {
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
        };
        super(baseSchema, options);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=schema.js.map