import { response } from 'express';
import * as mongoose from 'mongoose';
import { DocumentQuery } from 'mongoose';
import { type } from 'os';
// import Database from 'src/libs/Database';
import { IQueryBaseCreate, IQueryBaseDelete, IQueryBaseGet, IQueryBaseList, IQueryBaseUpdate } from '../entities';
import IVersionableDocument from './IVersionableDocument';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  private modelType: M;

  constructor(modelType) {
    this.modelType = modelType;
  }

  /**
   * Create new application
   * @property {string} body.name - The name of record.
   * @returns {Application}
   */
  public async create(options: IQueryBaseCreate): Promise<D> {
    const id = VersioningRepository.generateObjectId();
    const model = new this.modelType({
      ...options,
      _id: id,
      originalId: id,
    });
    return await model.save();
  }

  /**
   * Create new application
   * @property {string} id - Record unique identifier.
   * @returns {Application}
   */
  public async update(options: IQueryBaseUpdate): Promise<D> {

    const now = new Date();

    console.debug('Searching for previous valid object...', options.originalId);
    const previous = await this.getById(options.originalId);
    console.debug('PREVIOUS::::::::', JSON.stringify(previous));
    console.log('11111', previous.type);
    console.log('3333', options.originalId);
    const addressType = previous.originalId
    console.log('2222', (options.originalId == addressType));
    if (options.originalId == addressType) {
      console.log('options is= = ', options.originalId);
      if (previous) {
        console.debug('Invalidating previous valid object...');
        await this.invalidate(options.originalId);
      } else {
        // tslint:disable-next-line:no-null-keyword
        return null;
      }

      // const TYPE = Database.Addresses.findOne(type);

      console.log('test', options)
      const newInstance = Object.assign(previous.toJSON(), options);
      newInstance.id = VersioningRepository.generateObjectId();
      console.debug('NEW INSTANCE::::::::', newInstance);
      delete newInstance.deletedAt;

      const model = new this.modelType(newInstance);

      console.debug('Creating new object...');
      return await model.save();
    } else {
      return this.create(options);
    }
  }
public async upsert(options:IQueryBaseUpdate): Promise<D> {
  const now = new Date();
   console.log('option is --->',options)
    console.debug('Searching for previous valid object...', options.originalId);
    const previous = await this.getById(options.originalId);
    console.debug('PREVIOUS::::::::', JSON.stringify(previous));
    console.log('previous---->', previous)
    console.log('11111', previous.originalId);
    console.log('3333', options.originalId);
    const addressType = previous.originalId
    console.log('2222', (options.originalId == addressType));
    if (options.originalId === addressType) {
      console.log('options is= = ', options.originalId);
      if (previous) {
        return this.create(options);
      }else{
      
      //  else {
      //   // tslint:disable-next-line:no-null-keyword
      //   return null;
      // }

      // const TYPE = Database.Addresses.findOne(type);
      console.log('test', options)
      const newInstance = Object.assign(previous.toJSON(), options);
      newInstance.id = VersioningRepository.generateObjectId();
      console.debug('NEW INSTANCE::::::::', newInstance);
      delete newInstance.deletedAt;

      const model = new this.modelType(newInstance);

      console.debug('Creating new object...');
      return await model.save();
    } 
  }
    else {
      return this.create(options);
    }
}

  protected getAll(query: any = {}, options: any = {}): DocumentQuery<D[], D> {
    options.limit = options.limit || 0;
    options.skip = options.skip || 0;
    query.deletedAt = undefined;
    console.debug('getAll query: ', query);
    console.debug('getAll options: ', options);
    // tslint:disable:no-null-keyword
    return this.modelType.find(query, null, options);
  }

  protected getByQuery(query: any): DocumentQuery<D | null, D> {
    return this.modelType.findOne(query);
  }

  protected getById(originalId: string): any {
    console.debug(originalId);
    return this.modelType.findOne({ originalId });
  }

  protected getByIds(ids: string[]): DocumentQuery<D[], D> {
    return this.getAll({ originalId: { $in: ids } });
  }

  protected async remove(id: string): Promise<D> {
    const result = await this.getById(id);
    if (result) {
      return await this.invalidate(id);
    }
    return null;
  }
  protected invalidate(id: string): DocumentQuery<D, D> {
    const now = new Date();
    return this.modelType.update({ originalId: id, deletedAt: null }, { deletedAt: now });
  }
  protected async hardRemove(query: IQueryBaseDelete): Promise<D> {
    return await this.modelType.remove(query);
  }
}
