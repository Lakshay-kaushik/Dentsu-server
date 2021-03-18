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
    console.log('data from service',query);
    return this._UserRepository.get({ id });
  }

  public async getEmail(email): Promise<IUser> {
    console.log('inside Userservice',email);
    
    return await this._UserRepository.getemail( email );
  }

  public async createUser(query): Promise<IUser> {
    const { first_name, last_name, email, mobile_number } = query;
    return await this._UserRepository.create({
      first_name, last_name, email, mobile_number,
    });
  }

  public async createAddress(query): Promise<IAddress> {
    const { first_address, second_address, pincode, userId, } = query;
    return await this._AddressRepository.create({
      first_address, second_address, pincode, userId,
    })
  }

  // db.collection.findOne

  // public async update(query): Promise<IAddress> {
  //   const { first_address, second_address, pincode, originalId } = query;
  //   return this._AddressRepository.update({
  //     address: {
  //       first_address,
  //       second_address,
  //       pincode
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