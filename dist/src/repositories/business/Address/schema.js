"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class AddressSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            userId: {
                required: false,
                type: String
            },
            type: {
                required: false,
                type: String,
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
            },
        };
        super(baseSchema, options);
    }
}
exports.default = AddressSchema;
//# sourceMappingURL=schema.js.map