import IUser from '../../entities/IUser';
import UserRepository from '../../repositories/business/User/repository'
import AddressRepository from '../../repositories/business/Address/repository'
import { IAddress } from '../../entities';


class UserServices {
  private _UserRepository: UserRepository;
  private _AddressRepository: AddressRepository;

  public constructor() {
    this._UserRepository = new UserRepository();
    this._AddressRepository = new AddressRepository
  }


  public async list(limit: number, skip: number): Promise<IUser[]> {
    return this._UserRepository.list({ limit, skip });
  }

  public async get(query): Promise<IUser> {
    const { id } = query;
    return this._UserRepository.get({ id });
  }

  public async createUser(query): Promise<IUser> {
    const { First_name, Last_name, email, mobile_number} = query;
    return await this._UserRepository.create({
      First_name, Last_name, email, mobile_number,
    });
  }

  public async createAddress(query): Promise<IAddress> {
    const { First_address, Second_address, Pincode, userId, } = query;
    return await this._AddressRepository.create({
      First_address, Second_address, Pincode, userId,
    })
  }
  
  // db.collection.findOne

  // public async update(query): Promise<IAddress> {
  //   const { First_address, Second_address, Pincode, originalId } = query;
  //   return this._AddressRepository.update({
  //     address: {
  //       First_address,
  //       Second_address,
  //       Pincode
  //     },
  //     originalId,
  // });
  // }

  public async delete(query): Promise<IUser> {
    const { id } = query;
    return this._UserRepository.delete({
      id,
    });
  }
}
export default UserServices;