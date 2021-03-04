import * as mongoose from 'mongoose';

import IAddressModel from './IModel';
import AddressSchema from './schema';

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

export const addressSchema = new AddressSchema({
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
addressSchema.pre('save', (next: any) => {
  // this.updateDate = new Date();
  next();
});

/**
 * Indicies
 */
addressSchema.index({ name: 1 }, { unique: true });

/**
 * Methods
 */
addressSchema.method({});

/**
 * Statics
 */
addressSchema.statics = {};

/**
 * @typedef Address
 */

export const AddressModel: mongoose.Model<IAddressModel> = mongoose.model<IAddressModel>
  (
    'Addresses',
    addressSchema,
  );
