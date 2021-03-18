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
const VersioningRepository_1 = require("../../versionable/VersioningRepository");
const model_1 = require("./model");
class HomeRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.userModel);
    }
    /**
     * Get user list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {User[]}
     */
    list(options) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('User - List query: ', options);
            return _super.getAll.call(this, {}, options);
        });
    }
    /**
     * Get user.
     * @property {string} id - id of the record
     * @returns {User}
     */
    get(query) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data from repo', query);
            console.debug('UserRepository - Get: ');
            return _super.getById.call(this, query.id);
        });
    }
    getemail(query) {
        const _super = Object.create(null, {
            getByQuery: { get: () => super.getByQuery }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log('inside repository', query);
            console.debug('UserRepository - Get: ');
            return yield _super.getByQuery.call(this, { email: query });
        });
    }
    /**
     * Create new user
     * @property {string} firstname - The first name of user.
     * @property {string} lastname - The last name of user.
     * @property {number} mobilenumber - The contact number of user.
     * @property {string} email - The emailID of user
     * @returns {User}
     */
    create(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('UserRepository - Create: ');
            return _super.create.call(this, options);
        });
    }
    /**
     * Update new user
     * @property {string} first_name - The name of record.
     * @returns {User}
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('UserRepository - Update: ');
            return _super.update.call(this, options);
        });
    }
    /**
     * Delete user
     * @property {string} body.name - The name of record.
     * @returns {User}
     */
    delete(query) {
        const _super = Object.create(null, {
            remove: { get: () => super.remove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('HomeRepository - Delete: ');
            return _super.remove.call(this, query.id);
        });
    }
    /**
     * Hard Delete user
     * @property {string} body.name - The name of user.
     * @returns {User}
     */
    hardDelete(query) {
        const _super = Object.create(null, {
            hardRemove: { get: () => super.hardRemove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('UserRepository - Hard Delete: ');
            return _super.hardRemove.call(this, query);
        });
    }
}
exports.default = HomeRepository;
//# sourceMappingURL=repository.js.map