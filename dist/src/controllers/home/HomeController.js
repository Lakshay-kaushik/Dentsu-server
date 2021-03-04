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
const services_1 = require("../../services");
const utilities_1 = require("../../libs/utilities");
class HomeController {
    /* tslint:disable: no-null-keyword */
    constructor() {
        this._homeService = new services_1.HomeService();
    }
    static getInstance() {
        if (!HomeController.instance) {
            HomeController.instance = new HomeController();
        }
        return HomeController.instance;
    }
    /**
     * Get home list.
     * @property {number} skip - Number of messages to be skipped.
     * @property {number} limit - Limit number of messages to be returned.
     * @returns {IHome[]}
     */
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { limit, skip } = req.query;
                const result = yield HomeController.getInstance()._homeService.list(limit, skip);
                if (!result.length) {
                    return next(utilities_1.SystemResponse.badRequestError('Data not found', ''));
                }
                return res.send(utilities_1.SystemResponse.success('List of homes', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Get home.
     * @property {string} id - Number of messages to be skipped.
     * @returns {IHome}
     */
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield HomeController.getInstance()._homeService.get({ id });
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Data not found', ''));
                }
                return res.send(utilities_1.SystemResponse.success('Home', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Create new home
     * @property {string} First_name - The First_name of hello world.
     * @property {string} Last_name - The Last_name of hello world.
     * @property {string} email - The email of hello world.
     * @property {number} mobile_number - The mobile_number of hello world.
     * @returns {IHome}
     */
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { First_name, Last_name, email, mobile_number, } = req.body;
                const result = yield HomeController.getInstance()._homeService.create({
                    First_name, Last_name, email, mobile_number,
                });
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Unable to create', ''));
                }
                return res.send(utilities_1.SystemResponse.success('Home created', result));
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
     * @returns {IHome}
     */
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, type, First_address, Second_address, Pincode } = req.body;
                const result = yield HomeController.getInstance()._homeService.update({
                    originalId: id, First_address,
                    Second_address,
                    Pincode,
                    type,
                });
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Unable to update', ''));
                }
                return res.send(utilities_1.SystemResponse.success('Home updated', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Delete the home
     * @param id {string} The id of the home
     */
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield HomeController.getInstance()._homeService.delete({
                    id,
                });
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Unable to delete', ''));
                }
                return res.send(utilities_1.SystemResponse.success('Home deleted', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = HomeController.getInstance();
//# sourceMappingURL=HomeController.js.map