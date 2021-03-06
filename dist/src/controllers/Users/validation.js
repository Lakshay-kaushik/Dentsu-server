"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../libs/utilities");
exports.default = Object.freeze({
    // POST /api/users/create
    create: {
        first_name: {
            type: 'string',
            errorMessage: 'name is wrong!',
            in: ['body'],
            required: true,
            isLength: {
                errorMessage: 'Name should contain 3 or more than 3 chararcter',
                // Multiple options would be expressed as an array
                options: { min: 3 },
            },
            custom: {
                options: (name) => new RegExp(/^[A-Za-z]+$/).test(name),
                errorMessage: 'enter name Alphabetically'
            }
        },
        email: {
            type: 'string',
            errorMessage: "email is wrong!",
            required: true,
            in: ['body'],
            custom: {
                options: (email) => new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(email),
                errorMessage: `Please fill valid email address`
                // match: (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                // errorMessage: `Please fill valid email address`,
            }
        },
        mobile_number: {
            type: 'Int',
            required: 'true',
            isLength: {
                errorMessage: 'Invalid mobile number',
                // Multiple options would be expressed as an array
                options: { min: 10 },
            }
        },
        first_address: {
            type: 'string',
            errorMessage: 'address is wrong!',
            in: ['body'],
            required: true,
            isLength: {
                errorMessage: 'address should be at least 5 chars long',
                // Multiple options would be expressed as an array
                options: { min: 5 },
            },
        },
        second_address: {
            type: 'string',
            required: true,
            in: ['body'],
        },
        pincode: {
            type: 'Int',
            in: ['body'],
            required: true,
            isLength: {
                errorMessage: 'Invalid Pincode',
                // Multiple options would be expressed as an array
                options: { min: 4 },
            }
        },
    },
    update: {
        id: {
            custom: {
                options: (id) => {
                    return utilities_1.isValidObjectId(id);
                },
            },
            errorMessage: 'Bad ID format',
            in: ['body'],
        },
        first_address: {
            errorMessage: 'Name is wrong!',
            in: ['body'],
            isLength: {
                errorMessage: 'Name should be at least 5 chars long',
                // Multiple options would be expressed as an array
                options: { min: 5 },
            },
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