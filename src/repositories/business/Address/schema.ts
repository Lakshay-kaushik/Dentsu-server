import VersionableSchema from '../../versionable/VersionableSchema';
export default class AddressSchema extends VersionableSchema {
  constructor(options: any) {
    // super()
    const baseSchema = {
      userId: {
        required: false,
        type: String
      },
      type:{
        required: false,
        type: String,
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
      },
      
    //     Map<String,List<type, First_address, Second_address, Pincode>> multiMap = new HashMap<>();
    //         List<type, First_address, Second_address, Pincode> current = multiMap.get(key);
    //   if (current == null) {
    //       current = new ArrayList<Integer>();
    //       multiMap.put(key, current);
    //   }
    //   current.add(val);
    };
    
    super(baseSchema, options);
  }
}