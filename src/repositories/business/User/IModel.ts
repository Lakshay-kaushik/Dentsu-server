import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
  id: string;
  First_name: string;
}
