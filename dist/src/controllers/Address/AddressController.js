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
// import { Nullable } from '../../libs/Nullable';
const services_1 = require("../../services");
const utilities_1 = require("../../libs/utilities");
class AddressController {
    /* tslint:disable: no-null-keyword */
    constructor() {
        this._AddressService = new services_1.AddressServices();
    }
    static getInstance() {
        if (!AddressController.instance) {
            AddressController.instance = new AddressController();
        }
        return AddressController.instance;
    }
    /**
     * Create new Address
     * @property {string} First_address - The First_address of hello world.
     * @property {string} Second_address - The Second_address of hello world.
     * @property {number} Pincode - The Pincode of hello world.
     * @returns {IAddress}
     */
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield AddressController.getInstance()._AddressService.create({
                    userId: '',
                    First_address: '',
                    Second_address: '',
                    Pincode: '',
                });
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Unable to create', ''));
                }
                return res.send(utilities_1.SystemResponse.success('address created', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**sss
     * Update the home
     * @param id {string} - The id of the home.
     * @param First_address {string} -The updated First_address
     * @param Second_address {string} -The updated Second_address
     * @param Pincode {number} -The updated Pincode
     * @returns {IAddress}
     */
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { First_address, Second_address, Pincode } = req.body;
                const { id } = req.params;
                console.log('---id----', id);
                const result = yield AddressController.getInstance()._AddressService.update({
                    originalId: id,
                    First_address,
                    Second_address,
                    Pincode,
                });
                // console.log('inside--->', result);
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Unable to update', ''));
                }
                return res.send(utilities_1.SystemResponse.success('User updated', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = AddressController.getInstance();
//# sourceMappingURL=AddressController.js.map