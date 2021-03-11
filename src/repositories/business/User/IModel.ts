import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
  id: string;
  first_name: string;
  last_name?: string;
  email: string;
  mobile_number: number;
  first_address?: string;
  second_address?: string;
  pincode?: number
}
