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
class UserController {
    /* tslint:disable: no-null-keyword */
    constructor() {
        this._UserService = new services_1.UserServices();
    }
    static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
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
                const result = yield UserController.getInstance()._UserService.list(limit, skip);
                if (!result.length) {
                    return next(utilities_1.SystemResponse.badRequestError('Data not found', ''));
                }
                return res.send(utilities_1.SystemResponse.success('List of users', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
    /**
     * Create new home
     * @property {string} first_name - The first_name of hello world.
     * @property {string} last_name - The last_name of hello world.
     * @property {string} email - The email of hello world.
     * @property {number} mobile_number - The mobile_number of hello world.
     * @returns {IUser}
     */
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('IN create in controller');
            try {
                const { first_name, last_name, email, mobile_number, first_address, second_address, pincode, } = req.body;
                let emailresult = req.body.email;
                let catchemail = yield UserController.getInstance()._UserService.getEmail(email);
                // console.log('catch: ', catchemail[0].email, typeof(catchemail))
                console.log('sended data', emailresult);
                // const { catchemail: {model:{_doc} }} = catchemail
                console.log('catchemail', catchemail);
                let ce = catchemail && catchemail.email;
                console.log('ce', ce);
                if (emailresult === ce) {
                    console.log('inside if alreat registered');
                    return next(utilities_1.SystemResponse.badRequestError('email already registered', ''));
                }
                else {
                    console.log('inside else create new');
                    console.log(req.body.first_name);
                    let result;
                    result = yield UserController.getInstance()._UserService.createUser({
                        first_name, last_name, email, mobile_number,
                    });
                    console.log('USER CREATED ', result.originalId);
                    if (result && result.originalId) {
                        yield UserController.getInstance()._UserService.createAddress({
                            first_address, second_address, pincode,
                            userId: result.originalId
                        });
                    }
                    console.log(first_address);
                    if (!result) {
                        return next(utilities_1.SystemResponse.badRequestError('Unable to create', ''));
                    }
                    return res.send(utilities_1.SystemResponse.success('User created', result));
                }
            }
            catch (err) {
                return next(err);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield UserController.getInstance()._UserService.get({ id });
                console.log('data from controller', id);
                if (!result) {
                    return next(utilities_1.SystemResponse.badRequestError('Data not found', ''));
                }
                return res.send(utilities_1.SystemResponse.success('Users', result));
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = UserController.getInstance();
//# sourceMappingURL=UserController.js.map