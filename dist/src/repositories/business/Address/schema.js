"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = require("../../versionable/VersionableSchema");
class AddressSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            userId: {
                required: true,
                type: String
            },
            address: {
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
            }
        };
        super(baseSchema, options);
    }
}
exports.default = AddressSchema;
//# sourceMappingURL=schema.js.map