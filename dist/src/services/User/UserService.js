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
const repository_1 = require("../../repositories/business/User/repository");
const repository_2 = require("../../repositories/business/Address/repository");
class UserServices {
    constructor() {
        this._UserRepository = new repository_1.default();
        this._AddressRepository = new repository_2.default;
    }
    list(limit, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._UserRepository.list({ limit, skip });
        });
    }
    // public async get(query): Promise<IUser> {
    //   const { id } = query;
    //   return this._UserRepository.get({ id });
    // }
    getEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('inside Userservice', email);
            return yield this._UserRepository.getemail(email);
        });
    }
    createUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_name, last_name, email, mobile_number } = query;
            return yield this._UserRepository.create({
                first_name, last_name, email, mobile_number,
            });
        });
    }
    createAddress(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_address, second_address, pincode, userId, } = query;
            return yield this._AddressRepository.create({
                first_address, second_address, pincode, userId,
            });
        });
    }
    // db.collection.findOne
    // public async update(query): Promise<IAddress> {
    //   const { first_address, second_address, pincode, originalId } = query;
    //   return this._AddressRepository.update({
    //     address: {
    //       first_address,
    //       second_address,
    //       pincode
    //     },
    //     originalId,
    // });
    // }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = query;
            return this._UserRepository.delete({
                id,
            });
        });
    }
}
exports.default = UserServices;
//# sourceMappingURL=UserService.js.map