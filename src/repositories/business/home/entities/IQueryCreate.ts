import { IQueryBaseCreate } from '../../../entities';

export default interface ICreate extends IQueryBaseCreate {
  First_name: string;
  Last_name: string;
  email: string;
  mobile_number: Number;
}
