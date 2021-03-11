import VersionableSchema from '../../versionable/VersionableSchema';
export default class HomeSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {

      first_name: {
        required: true,
        type: String,
      },
      last_name: {
        required: false,
        type: String,
      },
      email: {
        required: true,
        type: String,
      },
      mobile_number: {
        required: true,
        type: Number,
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
      }

    };

    super(baseSchema, options);
  }
}
