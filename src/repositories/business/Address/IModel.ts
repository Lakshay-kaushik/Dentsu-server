import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IAddressModel extends IVersionableDocument {
  id: string;
  first_address: string;
}
