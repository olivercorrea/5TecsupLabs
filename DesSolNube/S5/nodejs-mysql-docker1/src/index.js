import express from 'express'
import { createPool } from 'mysql2/promise'

const app = express()

const pool = createPool({
    host: 'mysqldb',
    user: 'root',
    password: '123456',
    port: '3306' // ponemos el puerto de 3307 a 3306 que esta en el contenedor, para una comunicación mejor de la red
})
app.get('/', (reg, res) =>{
    res.send('Hello-world')
})

app.get('/ping', async (reg, res) => {
    const result  = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)
console.log('Server on port: ', 3000)