import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryGet, IQueryUpdate } from '../home/entities';
import IAddressModel from './IModel';
import { AddressModel } from './model';

export default class AddressRepository extends VersioningRepository<IAddressModel,
  mongoose.Model<IAddressModel>> {

  constructor() {
    super(AddressModel);
  }

  /**
   * Get home.
   * @property {string} id - _id of the record
   * @returns {Address}
   */
  public async get(query: IQueryGet): Promise<Nullable<IAddressModel>> {

    console.debug('AddressRepository - Get: ');
    return super.getById(query.id);
  }


  /**
   * Update new home
   * @property {string} First_address - The First address of record.
   * @property {string} Second_address - The Second address of record.
   * @property {number} Pincode - The pincode of record
   * @returns {Address}
   */
  public async update(options: IQueryUpdate): Promise<IAddressModel> {
    console.debug('AddressRepository - Update: ');
    return super.update(options);
  }

}
