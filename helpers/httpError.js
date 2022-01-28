export default function httpError ({ statusCode, errorMessage, inputField='', ErrorType='Error' }) {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode,
      data: JSON.stringify({
        success: false,
        error: errorMessage,
        inputField,
        ErrorType
      })
    }
  }