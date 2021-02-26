import IAddress from '../../entities/IAddress';
import AddressRepository from '../../repositories/business/Address/repository'


class AddressServices {
  private _AddressRepository: AddressRepository;
  
    public constructor() {
      this._AddressRepository = new AddressRepository();
    }

    public async update(query): Promise<IAddress> {
        const { First_address, Second_address, Pincode, originalId } = query;
        return this._AddressRepository.update({
          First_address,
          Second_address,
          Pincode,
          originalId,
        });
    }
    
}
export default AddressServices;