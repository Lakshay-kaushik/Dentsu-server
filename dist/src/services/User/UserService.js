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
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = query;
            return this._UserRepository.get({ id });
        });
    }
    createUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { First_name, Last_name, email, mobile_number } = query;
            return yield this._UserRepository.create({
                First_name, Last_name, email, mobile_number,
            });
        });
    }
    createAddress(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { First_address, Second_address, Pincode } = query;
            return yield this._AddressRepository.create({
                First_address, Second_address, Pincode
            });
        });
    }
    // public async update(query): Promise<IAddress> {
    //   const { First_address, Second_address, Pincode, originalId } = query;
    //   return this._AddressRepository.update({
    //     address: {
    //       First_address,
    //       Second_address,
    //       Pincode
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