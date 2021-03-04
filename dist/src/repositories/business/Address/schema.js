"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class AddressSchema extends VersionableSchema_1.default {
    constructor(options) {
        // super()
        const baseSchema = {
            userId: {
                required: false,
                type: String
            },
            type: {
                required: false,
                type: String,
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
            },
        };
        super(baseSchema, options);
    }
}
exports.default = AddressSchema;
//# sourceMappingURL=schema.js.map