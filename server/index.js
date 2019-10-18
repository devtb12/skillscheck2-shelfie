require ("dotenv").config()
const express = require ('express')
const massive = require ('massive')
const app = express()

//### deconstruct
//massive(process.env.CONNECTION_STRING)
const {CONNECTION_STRING} = process.env

//### promise
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
}).catch(err => console.log(err))

app.use(express.json())


//Nobody

//Nobody

//Vegeta:
PORT = 9000
app.listen(PORT, () => console.log(`Its over ${PORT} !!! `))