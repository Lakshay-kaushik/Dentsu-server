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
  /**
   * Create new Address
   * @property {string} first_address - The first_address of hello world.
   * @property {string} second_address - The second_address of hello world.
   * @property {number} pincode - The pincode of hello world.
   * @returns {IAddress}
   */
  public async create(req, res, next) {
    try {
      const result = await AddressController.getInstance()._AddressService.create({
        userId: '',
        first_address: '',
        second_address: '',
        pincode: '',
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
   * Update the Address
   * @param id {string} - The id of the home.
   * @param first_address {string} -The updated first_address
   * @param second_address {string} -The updated second_address
   * @param pincode {number} -The updated pincode
   * @returns {IAddress}
   */
  public async update(req, res, next) {
    try {
      const { first_address, second_address, pincode } = req.body;
      const { id } = req.params;
      console.log('---id----', id);
      const result = await AddressController.getInstance()._AddressService.update({
        originalId: id,
        first_address,
        second_address,
        pincode,
      });
      console.log('inside--->', result);

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