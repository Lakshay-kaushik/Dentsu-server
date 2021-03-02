import VersionableSchema from '../../versionable/VersionableSchema';
export default class AddressSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      userId: {
        required: false,
        type: String
      },
      address:{
        First_address: {
        required: false,
        type: String,
      },
      Second_address: {
        required: false,
        type: String,
      },
      Pincode: {
        required: false,
        type: Number
      }
    }

    };

    super(baseSchema, options);
  }
}