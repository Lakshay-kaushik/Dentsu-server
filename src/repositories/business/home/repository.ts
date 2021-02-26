import * as mongoose from 'mongoose';
import { Nullable } from '../../../libs/Nullable';
import VersioningRepository from '../../versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryGet, IQueryList, IQueryUpdate } from './entities';
import IUserModel from './IModel';
import { homeModel } from './model';

export default class HomeRepository extends VersioningRepository<IUserModel,
  mongoose.Model<IUserModel>> {

  constructor() {
    super(homeModel);
  }
  /**
   * Get home list.
   * @property {number} skip - Number of records to be skipped.
   * @property {number} limit - Limit number of records to be returned.
   * @returns {User[]}
   */
  public async list(options: IQueryList): Promise<IUserModel[]> {

    console.debug('Home - List query: ', options);

    return super.getAll({}, options);
  }

  /**
   * Get home.
   * @property {string} id - _id of the record
   * @returns {User}
   */
  public async get(query: IQueryGet): Promise<Nullable<IUserModel>> {

    console.debug('HomeRepository - Get: ');
    return super.getById(query.id);
  }

  /**
   * Create new home
   * @property {string} First_name - The name of record.
   * @returns {User}
   */
  public async create(options: IQueryCreate): Promise<IUserModel> {
    console.debug('HomeRepository - Create: ');
    return super.create(options);
  }

  /**
   * Update new home
   * @property {string} First_name - The name of record.
   * @returns {User}
   */
  public async update(options: IQueryUpdate): Promise<IUserModel> {
    console.debug('HomeRepository - Update: ');
    return super.update(options);
  }
  /**
   * Delete home
   * @property {string} body.name - The name of record.
   * @returns {User}
   */
  public async delete(query: IQueryDelete): Promise<IUserModel> {
    console.debug('HomeRepository - Delete: ');
    return super.remove(query.id);
  }

  /**
   * Hard Delete home
   * @property {string} body.name - The name of record.
   * @returns {User}
   */
  public async hardDelete(query: IQueryDelete): Promise<IUserModel> {
    console.debug('HomeRepository - Hard Delete: ');
    return super.hardRemove(query);
  }
}
