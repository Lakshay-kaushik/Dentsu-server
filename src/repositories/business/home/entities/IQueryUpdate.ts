import { IQueryBaseUpdate } from '../../../entities';

export default interface IQueryUpdate extends IQueryBaseUpdate {
 First_address: string;
  Second_address: string;
  Pincode: number;
  type: string;
}
