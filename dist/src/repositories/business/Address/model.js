"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = exports.addressSchema = void 0;
const mongoose = require("mongoose");
const schema_1 = require("./schema");
/**
 * Address Schema
 */
/**
 * @swagger
 * definitions:
 *   AddressPut:
 *     properties:
 *       id:
 *         type: string
 *       first_address:
 *         type: string
 *       second_address:
 *         type: string
 *       pincode:
 *        type: number
 *   AddressPost:
 *     properties:
 *       first_address:
 *         type: string
 *       second_address:
 *         type: string
 *       pincode:
 *         type: number
 *   AddressResponse:
 *     properties:
 *       first_address:
 *         type: string
 *       id:
 *         type: string
 *       second_address:
 *         type: string
 *       pincode:
 *         type: number
 *       userId:
 *         type: string
 *       originalId:
 *         type: string
 *       createdAt:
 *         type: string
 *   AddressArraySuccess:
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
 *           $ref: '#/definitions/AddressResponse'
 *   AddressObjectSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/AddressResponse'
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