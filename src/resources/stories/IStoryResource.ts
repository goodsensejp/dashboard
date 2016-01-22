import IResponse from "../IResponse";

interface IStoryResource {
  all(): Promise<IResponse>;
}

export default IStoryResource;