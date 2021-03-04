// import { Nullable } from '../../libs/Nullable';
import { UserServices } from '../../services';
import { SystemResponse } from '../../libs/utilities';
import { IUser } from '../../entities';

class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }
  private static instance: UserController;

  /* tslint:disable: variable-name */
  private _UserService: UserServices;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._UserService = new UserServices();
  }

  /**
   * Get home list.
   * @property {number} skip - Number of messages to be skipped.
   * @property {number} limit - Limit number of messages to be returned.
   * @returns {IUser[]}
   */


  /**
   * Create new home
   * @property {string} First_name - The First_name of hello world.
   * @property {string} Last_name - The Last_name of hello world.
   * @property {string} email - The email of hello world.
   * @property {number} mobile_number - The mobile_number of hello world.
   * @returns {IUser}
   */
  public async create(req, res, next) {
    try {
      const { First_name, Last_name, email, mobile_number,
        First_address, Second_address, Pincode,
      } = req.body;
      let result;
      if (email !== mobile_number) {
        result = await UserController.getInstance()._UserService.createUser({
          First_name, Last_name, email, mobile_number,
        });
        console.log('USER CREATED ', result.originalId);
        if (result && result.originalId) {
          await UserController.getInstance()._UserService.createAddress({

            First_address, Second_address, Pincode,

            userId: result.originalId
          })
        }

      }
          userId: result.id;
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to create', ''));
      }
      return res.send(SystemResponse.success('User created', result));
    } catch (err) {
      return next(err);
    }
  }

  // /**sss
  //  * Update the home
  //  * @param id {string} - The id of the home.
  //  * @param First_address {string} -The updated First_address
  //  * @param Second_address {string} -The updated Second_address
  //  * @param Pincode {number} -The updated Pincode
  //  * @returns {IUser}
  //  */
  // public async update(req, res, next) {
  //   try {
  //     const { id, First_address, Second_address, Pincode } = req.body;
  //     const result = await UserController.getInstance()._UserService.update({
  //       originalId: id, First_address,
  //       Second_address,
  //       Pincode,
  //     });
  //     if (!result) {
  //       return next(SystemResponse.badRequestError('Unable to update', ''));
  //     }
  //     return res.send(SystemResponse.success('User updated', result));
  //   } catch (err) {
  //     return next(err);
  //   }
  // }

  /**
   * Delete the home
   * @param id {string} The id of the home
   */


}
export default UserController.getInstance();