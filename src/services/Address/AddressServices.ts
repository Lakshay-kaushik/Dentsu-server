import IAddress from '../../entities/IAddress';
import AddressRepository from '../../repositories/business/Address/repository'


class AddressServices {
  private _AddressRepository: AddressRepository;

  public constructor() {
    this._AddressRepository = new AddressRepository();
  }
  public async create(query): Promise<IAddress> {
    const { First_address, Second_address, Pincode, } = query;
    return await this._AddressRepository.create({
      First_address, Second_address, Pincode,
    });
  }

  public async update(query): Promise<IAddress> {
    console.log('update(AddressServices)')
    const { First_address, Second_address, Pincode, originalId } = query;
    console.log('service values', First_address, Second_address, Pincode, originalId);
    return this._AddressRepository.update({
      First_address,
      Second_address,
      Pincode,
      originalId,
    });
  };

}
export default AddressServices;