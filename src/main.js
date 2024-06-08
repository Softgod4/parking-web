const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'main.html'))
})

app.get('/form', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'form.html'))
})

app.listen(port, () => {
    console.log(`Сервер работает на порте: ${port}`)
})