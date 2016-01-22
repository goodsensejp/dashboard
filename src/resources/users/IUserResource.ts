import IResponse from "../IResponse";

interface IUserResource {
  byUsername(username): Promise<IResponse>;
}

export default IUserResource;