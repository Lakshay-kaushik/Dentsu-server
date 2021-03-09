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
class AddressRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.AddressModel);
    }
    /**
     * Get home.
     * @property {string} id - _id of the record
     * @returns {Address}
     */
    get(query) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('AddressRepository - Get: ');
            return _super.getById.call(this, query.id);
        });
    }
    create(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('AddressRepository - Create: ');
            return _super.create.call(this, options);
        });
    }
    /**
     * Update new home
     * @property {string} First_address - The First address of record.
     * @property {string} Second_address - The Second address of record.
     * @property {number} Pincode - The pincode of record
     * @returns {Address}
     */
    update(options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('AddressRepository - Update: ');
            return _super.update.call(this, options);
        });
    }
}
exports.default = AddressRepository;
//# sourceMappingURL=repository.js.map