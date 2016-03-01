declare module "isomorphic-fetch" {
  function fetch(endpoint: string): Promise<any>;
  export = fetch;
}
