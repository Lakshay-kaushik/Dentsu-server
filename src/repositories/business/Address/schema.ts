import VersionableSchema from '../../versionable/VersionableSchema';
export default class AddressSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      userId: {
        required: false,
        type: String
      },
      type: {
        required: false,
        type: String,
      },
      first_address: {
        required: false,
        type: String,
      },
      second_address: {
        required: false,
        type: String,
      },
      pincode: {
        required: false,
        type: Number
      },

    };

    super(baseSchema, options);
  }
}