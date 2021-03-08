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
const repository_1 = require("../../repositories/business/Address/repository");
class AddressServices {
    constructor() {
        this._AddressRepository = new repository_1.default();
    }
    create(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { First_address, Second_address, Pincode, } = query;
            return yield this._AddressRepository.create({
                First_address, Second_address, Pincode,
            });
        });
    }
    update(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('update(AddressServices)');
            const { First_address, Second_address, Pincode, originalId, userId } = query;
            console.log('service values', First_address, Second_address, Pincode, originalId);
            return this._AddressRepository.update({
                First_address,
                Second_address,
                Pincode,
                originalId,
                userId,
            });
        });
    }
    ;
}
exports.default = AddressServices;
//# sourceMappingURL=AddressServices.js.map