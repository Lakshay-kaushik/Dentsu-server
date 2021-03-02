import IHome from '../../entities/IHome';
import { Nullable } from '../../libs/Nullable';
import HomeRepository from '../../repositories/business/home/repository';

class HomeService {

  // tslint:disable-next-line:variable-name
  private _homeRepository: HomeRepository;

  public constructor() {
    this._homeRepository = new HomeRepository();
  }
  public async list(limit: number, skip: number): Promise<IHome[]> {
    return this._homeRepository.list({ limit, skip });
  }

  public async get(query): Promise<IHome> {
    const { id } = query;
    return this._homeRepository.get({id});
  }

  public async create(query): Promise<IHome> {
    const { First_name, Last_name, email, mobile_number,} = query;
    return this._homeRepository.create({
      First_name, Last_name, email, mobile_number,
    });
  }

  public async update(query): Promise<IHome> {
    const { First_address, Second_address, Pincode, originalId } = query;
    return this._homeRepository.update({
     address:{ First_address,
      Second_address,
      Pincode},
      originalId,
    });
  }

  public async delete(query): Promise<IHome> {
    const { id } = query;
    return this._homeRepository.delete({
      id,
    });
  }
}

export default HomeService;
