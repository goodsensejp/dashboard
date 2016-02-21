export class ModelNotFoundError extends Error {
}

export class NotFoundError extends Error {
}

export class UnauthorizedError extends Error {
}

export class ValidationError extends Error {

  constructor(private messages: Object) {
    super();
  }
}