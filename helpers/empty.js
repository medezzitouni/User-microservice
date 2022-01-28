import { InvalidPropertyError } from "./errors"

export default function empty(value, field=''){
   
   if(typeof value == typeof {})
        Object.keys(value).map((key, index) => {
            emptyOne(value[key], key)
        })
   else emptyOne(value, field)
}

export function emptyOne(value, field){
    if(typeof value == 'string' &&  value.length == 0)
        throw new InvalidPropertyError(`${field} should not be empty!`, field) 
}