import { isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  // POST /api/users/create
  create: {
    first_name: {
      errorMessage: 'Name is wrong!',
      in: ['body'],
      isLength: {
        errorMessage: 'Name should be at least 2 chars long',
        // Multiple options would be expressed as an array
        options: { min: 2 },
      },
    },
    email: {
      type: 'string',
      errorMessage: "email is wrong!",
      match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],
      in: ['body'],
    },
    mobile_number: {
      type: 'Int',
      required: 'false',
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
      type : 'Int',
      required: true,
      in: ['body'],
      options: { min:4, max:7 }
    },

  },
  update: {
    id: {
      custom: {
        options: (id: string) => {
          return isValidObjectId(id);
        },
      },
      errorMessage: 'Bad ID format',
      in: ['body'],
    },
    first_address: {
      errorMessage: 'Name is wrong!',
      in: ['body'],
      isLength: {
        errorMessage: 'Name should be at least 25 chars long',
        // Multiple options would be expressed as an array
        options: { min: 25 },
      },
    },
  },
  delete: {
    id: {
      custom: {
        options: (id: string) => {
          return isValidObjectId(id);
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
        options: (id: string) => {
          return isValidObjectId(id);
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