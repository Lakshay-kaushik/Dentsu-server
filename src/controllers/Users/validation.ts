import { isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  // POST /api/user/create
  create: {
    First_name: {
        type: 'string',
      errorMessage: 'Name is wrong!',
      in: ['body'],
      isLength: {
        errorMessage: 'Name should be at least 3 chars long',
        // Multiple options would be expressed as an array
        options: { min: 3 },
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
    First_address: {
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