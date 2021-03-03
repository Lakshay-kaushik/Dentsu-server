"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = exports.addressSchema = void 0;
const mongoose = require("mongoose");
const schema_1 = require("./schema");
/**
 * address Schema
 */
/**
 * @swagger
 * definitions:
 *   AddressPut:
 *     properties:
 *       First_address:
 *         type: string
 *       Second_address:
 *         type: string
 *       Pincode:
 *         type: Number
 *   UserResponse:
 *     properties:
 *       First_address:
 *         type: string
 *       id:
 *         type: string
 *       Second_address:
 *         type: string
 *       Pincode:
 *         type: number
 *       originalId:
 *         type: string
 *       createdAt:
 *         type: string
 *   UserArraySuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/HomeResponse'
 *   UserObjectSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/HomeResponse'
 *   DeleteSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Deleted
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/Delete'
 *   Delete:
 *     properties:
 *       n:
 *         type: string
 *         example: 1
 *       nModified:
 *         type: string
 *         example: 1
 *       ok:
 *         type: string
 *         example: 1
 */
exports.addressSchema = new schema_1.default({
    collection: 'Addresses',
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.addressSchema.pre('save', (next) => {
    // this.updateDate = new Date();
    next();
});
/**
 * Indicies
 */
exports.addressSchema.index({ name: 1 }, { unique: true });
/**
 * Methods
 */
exports.addressSchema.method({});
/**
 * Statics
 */
exports.addressSchema.statics = {};
/**
 * @typedef Address
 */
exports.AddressModel = mongoose.model('Addresses', exports.addressSchema);
//# sourceMappingURL=model.js.map