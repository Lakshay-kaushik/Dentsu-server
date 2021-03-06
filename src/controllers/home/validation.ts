import { isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  // POST /api/homes/create
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
    // email: {
    //   type: 'string',
    //   errorMessage: "email is wrong!",
    //   match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],
    //   in: ['body'],
    // },
    // mobile_number: {
    //   type: 'Int',
    //   required: 'false',
    // }
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

});
