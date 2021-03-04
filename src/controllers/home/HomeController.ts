import IHome from '../../entities/IHome';
import { Nullable } from '../../libs/Nullable';
import { HomeService } from '../../services';
import { SystemResponse } from '../../libs/utilities';

class HomeController {
  public static getInstance() {
    if (!HomeController.instance) {
      HomeController.instance = new HomeController();
    }

    return HomeController.instance;
  }
  private static instance: HomeController;

  /* tslint:disable: variable-name */
  private _homeService: HomeService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this._homeService = new HomeService();
  }

  /**
   * Get home list.
   * @property {number} skip - Number of messages to be skipped.
   * @property {number} limit - Limit number of messages to be returned.
   * @returns {IHome[]}
   */
  public async list(req, res, next): Promise<IHome[]> {
    try {
      const { limit, skip } = req.query;
      const result = await HomeController.getInstance()._homeService.list(limit, skip);
      if (!result.length) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('List of homes', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Get home.
   * @property {string} id - Number of messages to be skipped.
   * @returns {IHome}
   */
  public async get(req, res, next): Promise<Nullable<IHome>> {
    try {
      const { id } = req.params;
      const result = await HomeController.getInstance()._homeService.get({ id });
      if (!result) {
        return next(SystemResponse.badRequestError('Data not found', ''));
      }
      return res.send(SystemResponse.success('Home', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Create new home
   * @property {string} First_name - The First_name of hello world.
   * @property {string} Last_name - The Last_name of hello world.
   * @property {string} email - The email of hello world.
   * @property {number} mobile_number - The mobile_number of hello world.
   * @returns {IHome}
   */
  public async create(req, res, next) {
    try {
      const { First_name, Last_name, email, mobile_number, } = req.body;
      const result = await HomeController.getInstance()._homeService.create({
        First_name, Last_name, email, mobile_number,
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to create', ''));
      }
      return res.send(SystemResponse.success('Home created', result));
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
   * @returns {IHome}
   */
  public async update(req, res, next) {
    try {
      const { id, type, First_address, Second_address, Pincode } = req.body;
      const result = await HomeController.getInstance()._homeService.update({
        originalId: id, First_address,
        Second_address,
        Pincode,
        type,
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to update', ''));
      }
      return res.send(SystemResponse.success('Home updated', result));
    } catch (err) {
      return next(err);
    }
  }

  /**
   * Delete the home
   * @param id {string} The id of the home
   */
  public async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await HomeController.getInstance()._homeService.delete({
        id,
      });
      if (!result) {
        return next(SystemResponse.badRequestError('Unable to delete', ''));
      }
      return res.send(SystemResponse.success('Home deleted', result));
    } catch (err) {
      return next(err);
    }
  }

}

export default HomeController.getInstance();
