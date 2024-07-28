import ErrorMessage from './ErrorMessage'

class QueryFailedError extends Error {
  constructor() {
    super(ErrorMessage.QUERY_FAILED)
    this.name = ErrorMessage.QUERY_FAILED
  }
}

export default QueryFailedError
