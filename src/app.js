const express = require('express')

const db = require('./utils/database')
const usersRouter = require('./users/users.router')

const port = 9000
const app = express()
app.use(express.json())


db.authenticate()
    .then(() => console.log('Database Autenticada Correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada Correctamente'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1', usersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
