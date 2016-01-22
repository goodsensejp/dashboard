import * as fetch from "isomorphic-fetch";

const newFetch: ((endpoint: string) => Promise<any>) = <any>fetch;

export default newFetch;