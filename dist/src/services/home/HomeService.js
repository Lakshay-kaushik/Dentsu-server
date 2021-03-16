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
const repository_1 = require("../../repositories/business/home/repository");
class HomeService {
    constructor() {
        this._homeRepository = new repository_1.default();
    }
    list(limit, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._homeRepository.list({ limit, skip });
        });
    }
    // public async get(query): Promise<IHome> {
    //   const { id } = query;
    //   return this._homeRepository.get({ id });
    // }
    create(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_name, last_name, email, mobile_number, } = query;
            return this._homeRepository.create({
                first_name, last_name, email, mobile_number,
            });
        });
    }
    update(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_address, second_address, pincode, originalId } = query;
            return this._homeRepository.update({
                first_address,
                second_address,
                pincode,
                originalId,
            });
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = query;
            return this._homeRepository.delete({
                id,
            });
        });
    }
}
exports.default = HomeService;
//# sourceMappingURL=HomeService.js.map