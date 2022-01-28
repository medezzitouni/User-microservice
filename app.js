import express from 'express'
import route from './routes'
import { httpError } from './helpers'

const app = express()

// middlewares
app.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(express.json())

//! the API routes
.use('/api', route)

// middleware 404 
app.use((req, res, next) =>{

    const { headers, statusCode, data } = httpError({statusCode: 404, errorMessage: "WE ARE SORRY, NOTHING FOUND"})
    res.set(headers)
       .status(statusCode)
       .send(data)
})
  
// error-handling middleware
app.use((err, req, res, next) =>{

    console.log("I catch it " + err.stack)
    const { headers, statusCode, data } = httpError({statusCode: 500, errorMessage: "something broke, we are sorry, try later"})
    res.set(headers)
       .status(statusCode)
       .send(data)
})

export default app;