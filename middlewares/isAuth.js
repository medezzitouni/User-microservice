import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    
    try{
       const token = req.headers.authorization.split(' ')[1]
        console.log('auth -> ' + token)
       const decodedToken = jwt.verify(token, 'RANDOM_STRING_SECRET')
       const userId = decodedToken.userId
       if(req.headers.userid && req.headers.userid !== userId)
            res.set({'Content-Type': 'application/json'}) 
               .status(401)
               .send({
                   success: false,
                   error: 'Unauthorized!'
               })
       else
           next()
    }catch(err){  
           console.log(err)
           res.set({'Content-Type': 'application/json'}) 
               .status(401)
               .send({
                   success: false,
                   error: 'Unauthorized!',
                   inputField: 'User'
               })
       
    }
}