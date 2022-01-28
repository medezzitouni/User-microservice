import { RequiredParameterError,
         UniqueConstraintError,
         InvalidPropertyError,
         NotExistError } from './index'
import { httpError } from '../'


export default function handleKnownErrors(e){

    if(e instanceof RequiredParameterError){
        
        return httpError({
            statusCode: 400,
            errorMessage: e.message,
            inputField: e.field,
            ErrorType: e.constructor.name
        })
    }
    if(e instanceof UniqueConstraintError){
        return httpError({
            statusCode: 400,
            errorMessage: e.message,
            inputField: e.field,
            ErrorType: e.constructor.name
        })
    }
    if(e instanceof InvalidPropertyError){
        return httpError({
            statusCode: 400,
            errorMessage: e.message,
            inputField: e.field,
            ErrorType: e.constructor.name
        })
    }
    if(e instanceof NotExistError){
        return httpError({
            statusCode: 400,
            errorMessage: e.message,
            inputField: e.field,
            ErrorType: e.constructor.name
        })
    }
    // if(e instanceof InternalServerError){
    //     return httpError({
    //         statusCode: 500,
    //         errorMessage: e.message
    //     })
    // }
    // console.log("handle Errors function", e.stack)
    return null
}