import IUser from '../../entities/IUser';
import UserRepository from '../../repositories/business/User/repository'


class UserServices {
  private _UserRepository: UserRepository;
  
    public constructor() {
      this._UserRepository = new UserRepository();
    }

    public async list(limit: number, skip: number): Promise<IUser[]> {
      return this._UserRepository.list({ limit, skip });
    }
  
    public async get(query): Promise<IUser> {
      const { id } = query;
      return this._UserRepository.get({id});
    }

  public async create(query): Promise<IUser> {
    const { First_name, Last_name, email, mobile_number,} = query;
        return await this._UserRepository.create({
          First_name, Last_name, email, mobile_number,
        });
    }
    public async update(query): Promise<IUser> {
        const { First_address, Second_address, Pincode, originalId } = query;
        return this._UserRepository.update({
          First_address,
          Second_address,
          Pincode,
          originalId,
        });
    }

    public async delete(query): Promise<IUser> {
      const { id } = query;
      return this._UserRepository.delete({
        id,
      });
    }
}
export default UserServices;