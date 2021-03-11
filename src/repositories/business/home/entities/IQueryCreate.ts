import { IQueryCreate } from '.';
import { IQueryBaseCreate } from '../../../entities';

export default interface ICreate extends IQueryBaseCreate {
  first_name?: string;
  last_name?: string;
  email?: string;
  mobile_number?: number;
  first_address?: string;
  second_address?: string;
  pincode?: number;
  userId?: string;
  type?: string;
}
