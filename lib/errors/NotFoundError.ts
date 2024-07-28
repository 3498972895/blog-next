import ErrorMessage from './ErrorMessage'

class NotFoundError extends Error {
  constructor() {
    super(ErrorMessage.NOT_FOUND)
    this.name = ErrorMessage.NOT_FOUND
  }
}

export default NotFoundError
