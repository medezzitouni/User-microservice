

export default function httpResponse ({ 
    statusCode,
    headers= {
        'Content-Type': 'application/json'
    },
    data
}){

    if(typeof data != typeof {}) data = {data}
    
    if(statusCode < 200 || statusCode > 299) 
        throw new Error(`a successful status code should be between 200 and 299 and not ${statusCode}`)
    else return {
            headers,
            statusCode,
            data: JSON.stringify(data)
    }
  }