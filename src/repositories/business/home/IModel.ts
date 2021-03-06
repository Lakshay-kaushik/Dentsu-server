import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IHomeModel extends IVersionableDocument {
  id: string;
  first_name: string;
}
export default interface IUserModel extends IVersionableDocument {
  id: string;
  first_name: string;
}