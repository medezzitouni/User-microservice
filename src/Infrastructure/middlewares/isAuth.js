import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    // console.log("mine " +req.headers.authorization)
    try{
       const token = req.headers.authorization.split(' ')[1]
        console.log('auth -> ' + token)
       const decodedToken = jwt.verify(token, 'RANDOM_STRING_SECRET')
       const userId = decodedToken.userId
    //    console.log("userID -> " + adminId)
    //    console.log("headers.adminID -> ", req.headers.adminid)
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