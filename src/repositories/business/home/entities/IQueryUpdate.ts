import { IQueryBaseUpdate } from '../../../entities';

export default interface IQueryUpdate extends IQueryBaseUpdate {
  first_address: string;
  second_address: string;
  pincode: number;
}
