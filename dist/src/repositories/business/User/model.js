"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose = require("mongoose");
const schema_1 = require("./schema");
/**
 * User Schema
 */
/**
 * @swagger
 * definitions:
 *   UserPost:
 *     properties:
 *       First_name:
 *         type: string
 *       Last_name:
 *         type: string
 *       mobile_number:
 *         type: number
 *       email:
 *         type: string
 *   UserResponse:
 *     properties:
 *       First_name:
 *         type: string
 *       id:
 *         type: string
 *       Last_name:
 *         type: string
 *       mobile_number:
 *         type: number
 *       email:
 *         type: string
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
exports.userSchema = new schema_1.default({
    collection: 'Users',
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
exports.userSchema.pre('save', (next) => {
    // this.updateDate = new Date();
    next();
});
/**
 * Indicies
 */
exports.userSchema.index({ name: 1 }, { unique: true });
/**
 * Methods
 */
exports.userSchema.method({});
/**
 * Statics
 */
exports.userSchema.statics = {};
/**
 * @typedef User
 */
exports.userModel = mongoose.model('users', exports.userSchema);
//# sourceMappingURL=model.js.map