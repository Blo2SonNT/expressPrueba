const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

const app = express();
conectarDB()
app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routes'))

const puerto = process.env.PORT || 4000

app.listen(puerto, () => {
    console.log(`Servidor ejecutandose en el puerto ${puerto}`)
})