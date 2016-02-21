export default class ValidationError extends Error {

  constructor(private messages: Object) {
    super();
  }
}