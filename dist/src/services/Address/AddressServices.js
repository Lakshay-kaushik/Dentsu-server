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
    update(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { First_address, Second_address, Pincode, originalId } = query;
            return this._AddressRepository.update({
                First_address,
                Second_address,
                Pincode,
                originalId,
            });
        });
    }
}
exports.default = AddressServices;
//# sourceMappingURL=AddressServices.js.map