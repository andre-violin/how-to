const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

let i = 0
const ola = 'Olá Maycon'
app.get('/', (request, response) => {
    i++
    response.render('index', { i, ola} )
})

app.listen(port, (err) => {
    if(err) {
        console.log('error:', err)
    }else {
        console.log('Quase Twitter App está rodando na porta:', port)
    }
})