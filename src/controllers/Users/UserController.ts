import { Nullable } from '../../libs/Nullable';
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
   * @returns {IHome[]}
   */
   public async list(req, res, next): Promise<IUser[]> {
    try {
      const { limit, skip } = req.query;
      const result = await UserController.getInstance()._UserService.list(limit, skip);
      if (!result.length) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('List of users', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Create new home
   * @property {string} first_name - The first_name of hello world.
   * @property {string} last_name - The last_name of hello world.
   * @property {string} email - The email of hello world.
   * @property {number} mobile_number - The mobile_number of hello world.
   * @returns {IUser}
   */
  public async create(req, res, next) {
    console.log('IN create in controller')
    try {
      const { first_name, last_name, email, mobile_number,
        first_address, second_address, pincode,
      } = req.body;
      let emailresult = req.body.email
      
      let catchemail = await UserController.getInstance()._UserService.getEmail(email);
      // console.log('catch: ', catchemail[0].email, typeof(catchemail))
      console.log('sended data', emailresult)
      // const { catchemail: {model:{_doc} }} = catchemail
      console.log('catchemail',catchemail);
      let ce = catchemail  && catchemail.email
      console.log('ce', ce);
      if (emailresult === ce) {
        console.log('inside if alreat registered')
        return next(SystemResponse.badRequestError('email already registered', ''));
      } else {
        console.log('inside else create new')

        console.log(req.body.first_name);
        let result;
        result = await UserController.getInstance()._UserService.createUser({
          first_name, last_name, email, mobile_number,
        });
        console.log('USER CREATED ', result.originalId);
        if (result && result.originalId) {
          await UserController.getInstance()._UserService.createAddress({

            first_address, second_address, pincode,

            userId: result.originalId
          })
        }
        console.log(first_address)
        if (!result) {
          return next(SystemResponse.badRequestError('Unable to create', ''));
        }
        return res.send(SystemResponse.success('User created', result));
      }
    } catch (err) {
      return next(err);
    }
  }


  public async get(req, res, next): Promise<Nullable<IUser>> {
    try {
      const { id } = req.params;
      const result = await UserController.getInstance()._UserService.get({id});
      console.log('data from controller',id)
      if (!result) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('Users', result));
    } catch (err) {
      return next(err);
    }
  }
  // /**sss
  //  * Update the home
  //  * @param id {string} - The id of the home.
  //  * @param first_address {string} -The updated first_address
  //  * @param second_address {string} -The updated second_address
  //  * @param pincode {number} -The updated pincode
  //  * @returns {IUser}
  //  */
  // public async update(req, res, next) {
  //   try {
  //     const { id, first_address, second_address, pincode } = req.body;
  //     const result = await UserController.getInstance()._UserService.update({
  //       originalId: id, first_address,
  //       second_address,
  //       pincode,
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