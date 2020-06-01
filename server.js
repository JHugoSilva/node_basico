const app = require('./app')
const moongose = require('mongoose')
require('dotenv').config({path:'variables.env'})

moongose.connect(process.env.DATABASE)
moongose.Promise = global.Promise
moongose.connection.on('error',(error)=>{
    console.error('ERROR'+error.message)
})

app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor OK: "+server.address().port)
})