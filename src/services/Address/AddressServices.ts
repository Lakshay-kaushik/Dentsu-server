import IAddress from '../../entities/IAddress';
import AddressRepository from '../../repositories/business/Address/repository'


class AddressServices {
  private _AddressRepository: AddressRepository;

  public constructor() {
    this._AddressRepository = new AddressRepository();
  }
  public async create(query): Promise<IAddress> {
    const { first_address, second_address, pincode, userId } = query;
    return await this._AddressRepository.create({
      first_address, second_address, pincode, userId
    });
  }

  public async update(query): Promise<IAddress> {
    console.log('update(AddressServices)')
    const { first_address, second_address, pincode, originalId } = query;
    console.log('service values', first_address, second_address, pincode, originalId,);
    return this._AddressRepository.update({
      first_address,
      second_address,
      pincode,
      originalId,
    });
  };

}
export default AddressServices;