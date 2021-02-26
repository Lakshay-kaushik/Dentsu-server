"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
exports.default = (req, res, next) => {
    return next(utilities_1.SystemResponse.notFoundError('', ''));
};
//# sourceMappingURL=notFoundRoute.js.map