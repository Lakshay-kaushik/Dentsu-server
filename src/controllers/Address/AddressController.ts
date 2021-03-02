// import { Nullable } from '../../libs/Nullable';
import { AddressServices } from '../../services';
import { SystemResponse } from '../../libs/utilities';
import { IAddress } from '../../entities';

class AddressController {
  public static getInstance() {
    if (!AddressController.instance) {
      AddressController.instance = new AddressController();
    }

    return AddressController.instance;
  }
  private static instance: AddressController;

  /* tslint:disable: variable-name */
  private _AddressService: AddressServices;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._AddressService = new AddressServices();
  }
public async create(req, res, next) {
    try {
  const result = await AddressController.getInstance()._AddressService.create({
    address: {
      First_address:'',
      Second_address:'',
      Pincode:'',
    }
  });
  if (!result) {
    return next(SystemResponse.badRequestError('Unable to create', ''));
  }
  return res.send(SystemResponse.success('address created', result));
} catch (err) {
  return next(err);
}
}
  /**sss
   * Update the home
   * @param id {string} - The id of the home.
   * @param First_address {string} -The updated First_address
   * @param Second_address {string} -The updated Second_address
   * @param Pincode {number} -The updated Pincode
   * @returns {IAddress}
   */
  public async update(req, res, next) {
    try {
      const { address:{First_address, Second_address, Pincode} } = req.body;
      const { id } = req.params;
      const result = await AddressController.getInstance()._AddressService.update({
        originalId: id,
        address: {
          First_address,
          Second_address,
          Pincode,
        }
      });
      console.log('inside--->',result);
      
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to update', ''));
      }
      return res.send(SystemResponse.success('User updated', result));
    } catch (err) {
      return next(err);
    }
  }
  
  /**
   * Delete the home
   * @param id {string} The id of the home
   */


}
export default AddressController.getInstance();