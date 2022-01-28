export class UniqueConstraintError extends Error {
    constructor (value, field) {
      super(`the username < ${value} > exists, it has to be unique. try another one`)
      this.field = field
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UniqueConstraintError)
      }
    }
  }
  
  export class InvalidPropertyError extends Error {
    constructor (msg, field) {
      super(msg)
      this.field = field
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, InvalidPropertyError)
      }
    }
  }
  
  export class RequiredParameterError extends Error {
    constructor (param) {
      super(`${param} can not be null or undefined.`)
      this.field = param
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }
  
  export class InternalServerError extends Error {
    constructor () {
      super("Sorry, Internal Server Error, try later")
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }

  export class NotExistError extends Error {
    constructor (value, field='', instanceNotFounded='') {
      super(`${value} does not exist`)
      this.field = field
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }

  export default {
      InvalidPropertyError,
      RequiredParameterError,
      UniqueConstraintError,
      InternalServerError,
      NotExistError
  }