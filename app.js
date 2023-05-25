const express = require('express');

const app = express();

const path = require('path')



app.use(express.static('publics'))

app.listen(3000 , () => {
    console.log('servidor corriendo en el puerto 3000')
})

app.get ('/', (req , res )=> {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get ('/login', (req , res )=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get ('/registro', (req , res )=> {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
})