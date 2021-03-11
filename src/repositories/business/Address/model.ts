import * as mongoose from 'mongoose';

import IAddressModel from './IModel';
import AddressSchema from './schema';

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
