"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../libs/utilities");
exports.default = Object.freeze({
    // POST /api/user/create
    update: {
        id: {
            custom: {
                options: (id) => {
                    return utilities_1.isValidObjectId(id);
                },
            },
            errorMessage: 'Bad ID format',
            in: ['params'],
        },
        first_address: {
            type: 'string',
            errorMessage: 'address is wrong!',
            in: ['body'],
            required: true,
            isLength: {
                errorMessage: 'Name should be at least 25 chars long',
                // Multiple options would be expressed as an array
                options: { min: 25 },
            },
        },
        second_address: {
            type: 'string',
            required: true,
            in: ['body'],
        },
        pincode: {
            type: 'Int',
            required: true,
            in: ['body'],
            options: { min: 4, max: 7 }
        },
    },
    delete: {
        id: {
            custom: {
                options: (id) => {
                    return utilities_1.isValidObjectId(id);
                },
            },
            errorMessage: 'Bad ID format',
            in: ['params'],
        },
    },
    // GET /api/homes/:id
    get: {
        id: {
            custom: {
                options: (id) => {
                    return utilities_1.isValidObjectId(id);
                },
            },
            errorMessage: 'Bad ID format',
            in: ['params'],
        },
    },
    // GET /api/homes
    list: {
        limit: {
            errorMessage: 'limit is wrong',
            in: ['query'],
            isInt: true,
            optional: true,
            toInt: true,
        },
        skip: {
            errorMessage: 'skip count is wrong',
            in: ['query'],
            isInt: true,
            optional: true,
            toInt: true,
        },
    }
});
//# sourceMappingURL=validation.js.map