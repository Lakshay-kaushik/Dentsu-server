"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = exports.SystemResponse = exports.StatusCodes = exports.errorHandler = exports.isValidObjectId = exports.generateObjectId = void 0;
const check_1 = require("express-validator/check");
const mongoose = require("mongoose");
const StatusCodes_1 = require("./StatusCodes");
exports.StatusCodes = StatusCodes_1.default;
const SystemResponse_1 = require("./SystemResponse");
exports.SystemResponse = SystemResponse_1.default;
exports.generateObjectId = () => mongoose.Types.ObjectId();
exports.isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
exports.errorHandler = (isLogging) => (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    const { message, status, error } = err;
    const result = {
        message: message || 'error',
        status: status || 500,
        error: error || 'undefined',
        timestamp: new Date(),
    };
    // If user wants loggin of the errors.
    // if ( isLogging ) 
    // logger.error(result);
    res.status(result.status).json(result);
};
const validationHandler = (validator) => {
    return [
        check_1.checkSchema(validator),
        (req, res, next) => {
            const errors = check_1.validationResult(req);
            if (!errors.isEmpty()) {
                next(SystemResponse_1.default.badRequestError('', errors.array().map(({ location, param, msg }) => ({ location, param, msg }))));
            }
            next();
        }
    ];
};
exports.validationHandler = validationHandler;
//# sourceMappingURL=utilities.js.map