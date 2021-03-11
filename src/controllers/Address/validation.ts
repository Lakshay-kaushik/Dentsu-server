import { isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  // POST /api/user/create
  update: {
    id: {
      custom: {
        options: (id: string) => {
          return isValidObjectId(id);
        },
      },
      errorMessage: 'Bad ID format',
      in: ['params'],
    },
    address: {
      first_address: {
        errorMessage: 'address is wrong!',
        in: ['body'],
        isLength: {
          errorMessage: 'Name should be at least 25 chars long',
          // Multiple options would be expressed as an array
          options: { min: 25 },
        },
      },
      second_address: {
        required: true,
        in: ['body'],
      },
      pincode: {
        required: true,
        in: ['body'],
      },

    }
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