import { IQueryBaseUpdate } from '../../../entities';

export default interface IQueryUpdate extends IQueryBaseUpdate {
 address:{ First_address: string;
  Second_address: string;
  Pincode: number;
 }
}
