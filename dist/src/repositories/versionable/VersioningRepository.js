"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class VersioningRepository {
    constructor(modelType) {
        this.modelType = modelType;
    }
    static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    /**
     * Create new application
     * @property {string} body.name - The name of record.
     * @returns {Application}
     */
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = VersioningRepository.generateObjectId();
            const model = new this.modelType(Object.assign(Object.assign({}, options), { _id: id, originalId: id }));
            return yield model.save();
        });
    }
    /**
     * Create new application
     * @property {string} id - Record unique identifier.
     * @returns {Application}
     */
    update(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            console.debug('Searching for previous valid object...', options.originalId);
            const previous = yield this.getById(options.originalId);
            console.debug('PREVIOUS::::::::', JSON.stringify(previous));
            console.log('11111', previous.type);
            console.log('3333', options.originalId);
            const addressType = previous.originalId;
            console.log('2222', (options.originalId == addressType));
            if (options.originalId == addressType) {
                console.log('options is= = ', options.originalId);
                if (previous) {
                    console.debug('Invalidating previous valid object...');
                    yield this.invalidate(options.originalId);
                }
                else {
                    // tslint:disable-next-line:no-null-keyword
                    return null;
                }
                // const TYPE = Database.Addresses.findOne(type);
                console.log('test', options);
                const newInstance = Object.assign(previous.toJSON(), options);
                newInstance.id = VersioningRepository.generateObjectId();
                console.debug('NEW INSTANCE::::::::', newInstance);
                delete newInstance.deletedAt;
                const model = new this.modelType(newInstance);
                console.debug('Creating new object...');
                return yield model.save();
            }
            else {
                return this.create(options);
            }
        });
    }
    upsert(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            console.log('option is --->', options);
            console.debug('Searching for previous valid object...', options.originalId);
            const previous = yield this.getById(options.originalId);
            console.debug('PREVIOUS::::::::', JSON.stringify(previous));
            console.log('previous---->', previous);
            console.log('11111', previous.originalId);
            console.log('3333', options.originalId);
            const addressType = previous.originalId;
            console.log('2222', (options.originalId == addressType));
            if (options.originalId === addressType) {
                console.log('options is= = ', options.originalId);
                if (previous) {
                    return this.create(options);
                }
                else {
                    //  else {
                    //   // tslint:disable-next-line:no-null-keyword
                    //   return null;
                    // }
                    // const TYPE = Database.Addresses.findOne(type);
                    console.log('test', options);
                    const newInstance = Object.assign(previous.toJSON(), options);
                    newInstance.id = VersioningRepository.generateObjectId();
                    console.debug('NEW INSTANCE::::::::', newInstance);
                    delete newInstance.deletedAt;
                    const model = new this.modelType(newInstance);
                    console.debug('Creating new object...');
                    return yield model.save();
                }
            }
            else {
                return this.create(options);
            }
        });
    }
    getAll(query = {}, options = {}) {
        options.limit = options.limit || 0;
        options.skip = options.skip || 0;
        query.deletedAt = undefined;
        console.debug('getAll query: ', query);
        console.debug('getAll options: ', options);
        // tslint:disable:no-null-keyword
        return this.modelType.find(query, null, options);
    }
    getByQuery(query) {
        return this.modelType.findOne(query);
    }
    getById(originalId) {
        console.debug(originalId);
        return this.modelType.findOne({ originalId });
    }
    getByIds(ids) {
        return this.getAll({ originalId: { $in: ids } });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getById(id);
            if (result) {
                return yield this.invalidate(id);
            }
            return null;
        });
    }
    invalidate(id) {
        const now = new Date();
        return this.modelType.update({ originalId: id, deletedAt: null }, { deletedAt: now });
    }
    hardRemove(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelType.remove(query);
        });
    }
}
exports.default = VersioningRepository;
//# sourceMappingURL=VersioningRepository.js.map