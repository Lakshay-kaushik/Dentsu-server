import IUserEntity from './IUserEntity'

export default interface IUser extends IUserEntity {
  first_name: string;
  last_name?: string;
  mobile_number: number;
  email: string;
}
