import ErrorMessage from './ErrorMessage'

class UploadFailedError extends Error {
  constructor() {
    super(ErrorMessage.UPLOAD_FAILED)
    this.name = ErrorMessage.UPLOAD_FAILED
  }
}

export default UploadFailedError
