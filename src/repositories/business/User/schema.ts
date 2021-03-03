import VersionableSchema from '../../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      First_name: {
        required: true,
        type: String,
      },
      Last_name: {
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
      

    };

    super(baseSchema, options);
  }
}
