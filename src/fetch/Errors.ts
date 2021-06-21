class EmptyInputError extends Error {
  constructor(...args: any) {
    super(...args);
    Object.setPrototypeOf(this, EmptyInputError.prototype);
  }
}

class WrongUrlError extends Error {
  constructor(...args: any) {
    super(...args);
    Object.setPrototypeOf(this, WrongUrlError.prototype);
  }
}

export {
  WrongUrlError,
  EmptyInputError
}